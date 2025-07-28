import subprocess
import sys
import os
import boto3
import ast
from datetime import datetime
from botocore.exceptions import BotoCoreError, NoCredentialsError

input_file = "input.py"
bucket_name = os.getenv("S3_BUCKET")
region = os.getenv("AWS_DEFAULT_REGION", "ap-south-1")
output_dir = "/code/media"  

os.environ["MANIM_MEDIA_DIR"] = output_dir  
os.environ["MANIM_USE_OPENCV"] = "false"
os.environ["XDG_RUNTIME_DIR"] = '/tmp'
os.environ["QT_QPA_PLATFORM"] = "offscreen"
os.environ["MANIM_LOG_LEVEL"] = "DEBUG"

def extract_scene_class(filename):
    with open(filename) as f:
        tree = ast.parse(f.read())
        for node in tree.body:
            if isinstance(node, ast.ClassDef):
                for base in node.bases:
                    if (isinstance(base, ast.Name) and base.id == "Scene") or \
                       (isinstance(base, ast.Attribute) and base.attr == "Scene"):
                        return node.name
    return None

if not os.path.exists(input_file):
    print(f"{input_file} not found.")
    sys.exit(1)

scene_class = extract_scene_class(input_file)

if not scene_class:
    print("No Scene class found in input.py")
    sys.exit(1)

try:
    subprocess.run([
        "manim",
        "-qk",
        input_file,
        scene_class,
    ], check=True)
except subprocess.CalledProcessError as e:
    print("Error while rendering scene:", e)
    sys.exit(1)

mp4_files = []
for root, dirs, files in os.walk(output_dir):
    for file in files:
        if file.endswith(".mp4"):
            full_path = os.path.join(root, file)
            mp4_files.append((full_path, os.path.getmtime(full_path)))

if not mp4_files:
    print("Rendered video not found.")
    sys.exit(1)

latest_video = sorted(mp4_files, key=lambda x: x[1], reverse=True)[0][0]
print(f"Found rendered video at {latest_video}")

try:
    s3 = boto3.client("s3", region_name=region)
    now = datetime.utcnow().strftime("%Y%m%d%H%M%S")
    s3_key = f"videos/{now}.mp4"
    s3.upload_file(latest_video, bucket_name, s3_key)

    video_url = f"https://{bucket_name}.s3.{region}.amazonaws.com/{s3_key}"
    print(f"VIDEO_URL::{video_url}")

except (BotoCoreError, NoCredentialsError) as e:
    print("S3 upload error:", e)
    sys.exit(1)
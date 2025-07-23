import subprocess
import sys
import os
import re

input_file = "input.py"

if not os.path.exists(input_file):
    print(f"{input_file} not found.")
    sys.exit(1)

scene_class = None
with open(input_file, "r") as f:
    code = f.read()
    match = re.search(r"class\s+(\w+)\s*\(\s*Scene\s*\)", code)
    if match:
        scene_class = match.group(1)

if not scene_class:
    print("No Scene class found in input.py.")
    sys.exit(1)

try:
    print(f"Rendering scene : {scene_class}")
    subprocess.run([
        "manim",
        "-qk",
        input_file,
        scene_class,  
    ], check=True)
except subprocess.CalledProcessError as e:
    print("Error rendering Manim scene:", e)
    sys.exit(1)

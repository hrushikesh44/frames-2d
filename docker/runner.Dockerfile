FROM python:3.10-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    g++ \
    build-essential \
    ffmpeg \
    libcairo2 \
    libglib2.0-0 \
    libpango1.0-dev \
    pkg-config \
    fonts-dejavu \
    fonts-freefont-ttf \
    libavdevice-dev \
    libavfilter-dev \
    libopenblas-dev \
    liblapack-dev \
    libopengl0 \
    libgl1-mesa-glx \
    libgl1-mesa-dri \
    libglu1-mesa \
    libglew-dev \
    libxrender1 \
    libxext6 \
    libsm6 \
    libx11-6 \
    texlive-fonts-recommended \
    texlive-latex-base \
    texlive-latex-extra \
    texlive-fonts-extra \
    dvipng \
    cm-super \
    git \
    curl \
    python3-pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*


RUN pip install --upgrade pip
RUN pip install manim boto3
RUN pip install moderngl piglet

WORKDIR /code
COPY runner.py /code/runner.py

ENTRYPOINT ["python", "runner.py"]

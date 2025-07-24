FROM python:3.10

RUN apt-get update && apt-get install -y \
    gcc \
    g++\
    ffmpeg \
    libcairo2 \
    pango1.0-tools \
    libpango1.0-dev \
    libglib2.0-0 \
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
    texlive-full \
    texlive-fonts-recommended \
    texlive-latex-extra \
    texlive-latex-base \
    texlive-fonts-extra \
    dvipng \
    cm-super \
    git \
    curl \
    build-essential \
    python3-pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
RUN pip install manim boto3

WORKDIR /code
COPY runner.py /code/runner.py

ENTRYPOINT ["python", "runner.py"]

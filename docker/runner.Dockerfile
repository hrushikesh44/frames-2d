FROM python:3.10-slim

ENV DISPLAY=:99
ENV MESA_GL_VERSION_OVERRIDE=4.1
ENV MESA_GLSL_VERSION_OVERRIDE=410
ENV LIBGL_ALWAYS_SOFTWARE=1
ENV GALLIUM_DRIVER=llvmpipe
ENV MANIM_RENDERER=cairo
ENV MANIMGL_WINDOW_CONFIG=headless

RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    g++ \
    build-essential \
    ffmpeg \
    libcairo2-dev \
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
    mesa-utils \
    libxrender1 \
    libxext6 \
    libsm6 \
    libx11-6 \
    xvfb \
    texlive-fonts-recommended \
    texlive-latex-base \
    texlive-latex-extra \
    texlive-fonts-extra \
    dvipng \
    cm-super \
    dvisvgm \
    git \
    curl \
    ghostscript \
    python3-pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
RUN pip install manim boto3

RUN pip install moderngl pyglet scipy numpy pillow

WORKDIR /code
COPY runner.py /code/runner.py

ENTRYPOINT ["sh", "-c", "Xvfb :99 -screen 0 1920x1080x24 -ac +extension GLX +render -noreset & sleep 2 && python runner.py"]
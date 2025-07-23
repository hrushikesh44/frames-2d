FROM python:3.10-slim

RUN apt-get update && apt-get install -y \
    build-essential \
    gcc \
    g++ \
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
    libpangocairo-1.0-0 \
 && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip
RUN pip install manim

WORKDIR /code
COPY runner.py /code/runner.py

ENTRYPOINT ["python", "runner.py"]


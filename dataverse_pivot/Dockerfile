# Use an official Python runtime as a parent image
FROM python:3.9


# Set the working directory in the container
WORKDIR /app

# # Install system dependencies
# RUN apt-get update && \
#     apt-get install -y --no-install-recommends \
#     libpq-dev \
#     libpangocairo-1.0-0 curl python3 python3-dev python3-setuptools redis-server \
#     python3-pip libglib2.0-0 libsm6 libfontconfig1 libxrender1 libxext6 ca-certificates software-properties-common \
#     python3-unidecode ffmpeg libsm6 libxext6 nginx build-essential cmake poppler-utils -y \
#     && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y --no-install-recommends libpangocairo-1.0-0 curl python3 python3-dev python3-setuptools \
    python3-pip libglib2.0-0 libsm6 libfontconfig1 libxrender1 libxext6 ca-certificates software-properties-common \
    python3-unidecode ffmpeg libsm6 libxext6 nginx build-essential cmake poppler-utils -y libpq-dev redis-server

# Install Python dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/

# Expose the port that the app will run on
EXPOSE 8000

# Command to run on container start
CMD ["gunicorn", "dataverse_pivot.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "4"]

# Example for using Redis
# Uncomment the following lines if you are using Redis as a cache or message broker
# COPY redis.conf /etc/redis/redis.conf
# # CMD ["gunicorn", "your_project_name.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "4"]
# CMD ["redis-server", "/etc/redis/redis.conf"]

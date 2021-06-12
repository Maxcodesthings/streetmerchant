#!/bin/sh
export PYTHONUNBUFFERED=TRUE
gunicorn main:app -w 2 --threads 2 -b 0.0.0.0:8000 --log-level debug

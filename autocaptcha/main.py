#!/usr/bin/python3
import json
import os

from flask import Flask
from flask.globals import request
from amazoncaptcha import AmazonCaptcha

app = Flask(__name__)


@app.route("/", methods=['POST'])
def captcha_solver():

    jdata = request.get_json()
    print("Received request", jdata)
    link = jdata['url']['content']

    captcha = AmazonCaptcha.fromlink(link)
    solution = captcha.solve()
    print("Return solution", solution)
    return json.dumps({"captcha": solution})

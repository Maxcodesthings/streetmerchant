# Autocaptcha

Auto captcha plugin uses the wonderful work of [amazoncaptcha](https://github.com/a-maliarov/amazoncaptcha) to auto solve the amazon captcha images usually sent to discord or slack.

Since **amazoncaptcha** is written in Python the easist integration is to host it as a service as well and send captcha urls to it, solve them and respond to streetmerchant.  Using python flask and gunicorn we turn amazoncaptcha into a web service.

You will need python3 installed to continue

## Getting Started

Configure your `dotenv`
```
CAPTCHA_HANDLER_SERVICE=auto
CAPTCHA_HANDLER_AUTO_HOST=localhost
CAPTCHA_HANDLER_AUTO_PORT=8000
```
Configure host and port to where you plan on hosting this python web service. Streetmerchant will send web request to this service to help it solve captcha

Start Gunicorn server with `./run.sh`

### Using Docker
1. Build image `docker build -t flask/autocaptcha .`
2. Execute image as daemon `docker run --rm -d -p 8000:8000 flask/autocaptcha` make sure you set your `-p` to the port you specified in step #1

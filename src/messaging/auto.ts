import fetch from 'node-fetch';
import { config } from '../config';
import { logger } from '../logger';
import { DMPayload } from '.';

const { autoHost, autoPort } = config.captchaHandler;

export async function getResponseAsync(
  payload: DMPayload
): Promise<string> {

  logger.info('✔ Captcha sent');
  const url = "http://" + autoHost + ":" + autoPort + "/"
  const body = { url: payload }
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.body !== null) {
    const rbody = await response.json()
    logger.info('Captcha returned ' + rbody.captcha)
    // const asString = new TextDecoder("utf-8").decode(rbody);
    return rbody.captcha
  } else {
    logger.error('Bad response from autocaptcha solver')
    return "error"
  }

}

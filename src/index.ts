import fetch from 'node-fetch';
import {API_URL_TO_ENV_MAP} from './constants';

const recordCpaEvent = (apiKey: string, promoCode: string, env: 'local' | 'dev' | 'prod' = 'prod') => {
  return fetch(`${API_URL_TO_ENV_MAP[env]}/record-cpa-event`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': apiKey
    },
    body: JSON.stringify({ promoCode })
  }).then((res) => res.json())
}

export default {
  recordCpaEvent
}
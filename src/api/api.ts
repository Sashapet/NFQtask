import axios from 'axios';

import { config } from '../config';
import { isJWTValid } from '../utils/jwt';

const CONFIG = __DEV__
  ? {
      headers: {
        Authorization: null,
        accept: 'application/json',
        'Accept-Language': 'en',
      },
    }
  : {
      headers: {
        Authorization: null,
        accept: 'application/json',
        'Accept-Language': 'en',
      },
    };

export default class Api {
  static JWT;
  static Config = CONFIG;

  static setToken = jwt => {
    Api.JWT = jwt;
    Api.Config.headers.Authorization = jwt;
  };

  static setLanguage = language => {
    Api.Config.headers['Accept-Language'] = language;
  };

  static checkJWT = async () => {
    if (!isJWTValid(Api.JWT)) {
      // const newToken = await FirebaseApi.getUserToken(true);
      // Api.setToken(newToken);
    }
  };

  // Helpers
  static get = async endpoint => {
    await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.get(url, Api.Config);
  };

  static post = async (endpoint, data) => {
    await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.post(url, data, Api.Config);
  };

  static patch = async (endpoint, data) => {
    await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.patch(url, data, Api.Config);
  };

  static delete = async (endpoint, data) => {
    await Api.checkJWT();
    const url = config.BASE_URL + endpoint;
    return axios.delete(url, { ...Api.Config, data });
  };

  // Api methods
}

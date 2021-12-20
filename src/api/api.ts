import axios from 'axios';
import SInfo from 'react-native-sensitive-info';

const getToken = async () => SInfo.getItem('token', {});

const login = async (loginData: { username: string; password: string }) => {
  const { data } = await axios.post(
    'https://vidqjclbhmef.herokuapp.com/credentials',
    loginData,
  );
  await SInfo.setItem('token', data.token, {});
  return data.token;
};
const fetchUser = async (token: string) => {
  const { data } = await axios.get('https://vidqjclbhmef.herokuapp.com/user', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
const logOut = async () => SInfo.setItem('token', '', {});
export const Api = {
  getToken,
  login,
  fetchUser,
  logOut,
};

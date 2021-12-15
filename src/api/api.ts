import axios from 'axios';
// import SInfo from 'react-native-sensitive-info';

const login = async (loginData: { username: string; password: string }) => {
  const { data } = await axios.post(
    'https://vidqjclbhmef.herokuapp.com/credentials',
    loginData,
  );
  //   await SInfo.setItem('token', user.data, {});
  return data;
};
const fetchUser = async (token: string) => {
  const { data } = await axios.get('https://vidqjclbhmef.herokuapp.com/user', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
export const Api = {
  login,
  fetchUser,
};

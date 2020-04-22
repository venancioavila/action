import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const getData = async () => {
  const data = JSON.parse(`${await AsyncStorage.getItem('@action:rasp')}`);
  return `http://${data.ip}:3000`;
};

const api = axios.create();

api.interceptors.request.use(
  async config => {
    config.baseURL = await getData();
    return config;
  },
  error => Promise.reject(error),
);

export default api;

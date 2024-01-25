// eslint-disable-next-line import/first
import axios from 'axios';
// eslint-disable-next-line import/first
import adapter from 'axios-miniprogram-adapter';

// eslint-disable-next-line no-undef
const env = Taro.getEnv()
if (env === 'WEAPP') {
    axios.defaults.adapter = adapter;
}

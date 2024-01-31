
import Taro from '@tarojs/taro'
import { useCallback, useState } from 'react'
import { apiGetTime, apidelPersonDynamicList } from '../../request/user'
import { View } from '../../components/cross-platform'

export default function Index() {
  const [dataTime, setDateTime] = useState({
    weekday: '',
    time: ''
  });
  // 用户信息数据
  const [userInfo, setUserInfo] = useState({
    account: 'This is RN project ~',
  });

  // 页面跳转
  const toLoginPage = () => {
    Taro.redirectTo({ url: '/pages/login/index' });
  }

  // 请求 - 获取每日时间
  const getTime = useCallback(async () => {
    let { result } = await apiGetTime();
    setDateTime(result);
    console.log('res', result)
  }, []);

  // 请求 - 删除用户动态
  const delPersonDynamicList = useCallback(async () => {
    const getUserInfo = async () => {
      try {
        const { data } = await Taro.getStorage({ key: 'userInfo' });
        let q = await apidelPersonDynamicList(data.id);
        console.log('====================================');
        console.log('删除用户动态接口请求成功', q);
        console.log('====================================');

      } catch (error) {
        console.error('删除用户动态接口/获取用户信息失败', error);
      }
    }
    getUserInfo()
  }, []);

  // 点击发送请求 - 获取每日时间
  const getNewsMessages = () => {
    getTime();
  }

  // 点击发送请求 - 删除用户动态
  const useLogin = () => {
    delPersonDynamicList();
  }

  // 清除用户登陆相关信息 - 退出登陆
  const cleanUserMsg = async () => {
    console.log('====================================');
    console.log(1111111);
    console.log('====================================');
    await Taro.clearStorage()
  }
  return (
    <View altClassName='min-h-full'>
      <View altClassName='items-center'>
        <View altClassName='text-sky-500'>今天是:{dataTime.weekday}</View>
        <View>现在时间为:{dataTime.time}</View>
      </View>
      <View altClassName='h-20 leading-[5rem] bg-slate-700 text-white' onClick={toLoginPage}>跳转到登陆页面</View>
      <View altClassName='h-20 leading-[5rem] bg-slate-700 text-white' onClick={getNewsMessages}>点击获取每日时间</View>
      <View altClassName='h-20 leading-[5rem] bg-slate-700 text-white' onClick={useLogin}>点击删除用户动态</View>
      <View altClassName='h-20 leading-[5rem] bg-slate-700 text-white' onClick={cleanUserMsg}>点击清除用户的token相关信息</View>
    </View>
  )
}

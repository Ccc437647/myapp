
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
  const routeGo = () => {
    Taro.navigateTo({ url: '/pages/news/index' });
  }

  // 请求 - 获取每日时间
  const getTime = useCallback(async () => {
    let { result } = await apiGetTime();
    setDateTime(result);
  }, []);

  // 请求 - 删除用户动态
  const delPersonDynamicList = useCallback(async () => {
    const getUserInfo = async () => {
      try {
        const { data } = await Taro.getStorage({ key: 'userInfo' });
        let q = await apidelPersonDynamicList(data.id);
        console.log('====================================');
        console.log('q', q);
        console.log('====================================');
      } catch (error) {

        console.error('获取用户信息失败', error);
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

  return (
    <View altClassName='min-h-full'>
      <View altClassName='items-center'>
        <View altClassName='text-sky-500'>今天是:{dataTime.weekday}</View>
        <View>现在时间为:{dataTime.time}</View>
      </View>
      <View altClassName='h-20 leading-[5rem] bg-slate-700 text-white' onClick={routeGo}>跳转到news页面</View>
      <View altClassName='h-20 leading-[5rem] bg-slate-700 text-white' onClick={getNewsMessages}>点击获取每日时间</View>
      <View altClassName='h-20 leading-[5rem] bg-slate-700 text-white' onClick={useLogin}>点击删除用户动态</View>
    </View>
  )
}

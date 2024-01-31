import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react';
import './index.scss'
import userAvatar from '../../static/userAvatar.png'
import { View, Image } from '../../components/cross-platform'



export default function User() {
  console.log('来了user页面');
  
  // 用户信息数据
  const [userInfo, setUserInfo] = useState({
    account: 'This is RN project ~',
  });
  const menuList = ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五']
  const env = Taro.getEnv()
  // 设置单行省略号(  )
  const textEllipsis = env == 'WEAPP' ? 'whitespace-nowrap overflow-ellipsis truncate' : ''

  // 获取页面路径
  const path = Taro.Current.router?.path

  // 获取本地存储的 userInfo 数据
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await Taro.getStorage({ key: 'userInfo' });
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, account: data.account }));
        console.log('获取用户信息成功');
      } catch (error) {
        console.error('获取用户信息失败', error);
      }
    };
    getUserInfo();
  }, [path]); // 空依赖数组表示只在组件挂载时执行一次

  return (
    <View altClassName='min-h-full'>
      {/* 用户信息区域 start */}
      <View altClassName='relative bg-slate-400 h-36 flex flex-row  items-center p-4'>
        {/* 头像 */}
        <Image altClassName='rounded-full w-24 h-24' src={userAvatar}></Image>
        {/* 昵称 */}
        <View altClassName={`text-cyan-300 ml-4 max-w-48   text-xl  ${textEllipsis}`} numberOfLines={1} ellipsizeMode='tail'>
          {userInfo.account}
        </View>
        {/* 设置logo */}
        <View altClassName='absolute top-6 right-10 text-red-600 text-2xl' >设置</View>
      </View>
      {/* 用户信息区域 end */}
      {/* 功能区域 start */}
      <View altClassName=''>
        {menuList.map((item, index) => {
          return (
            <View key={index} altClassName=' bg-amber-200 h-20  leading-[5rem] text-center mb-4'>{item}</View>
          )
        })}
      </View>

      {/* 功能区域 end */}
    </View>
  )
}

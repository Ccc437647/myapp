
import { useState } from 'react'
import Taro, { usePullDownRefresh, useReachBottom } from '@tarojs/taro'
import { View, ScrollView } from '../../components/cross-platform'
import './index.scss'

export default function Act() {
  // 监听用户下拉刷新的动作
  usePullDownRefresh(() => {
    // 业务逻辑 ...
    console.log('用户下拉刷新');
    // Taro.stopPullDownRefresh()   // 停止下拉刷新
  })

  // ScrollView区域 往上滚动加载
  const handleReachTop = () => {
    console.log('顶顶顶');
  };

  // ScrollView区域 往下滚动加载
  const handleReachBottom = () => {
    console.log('底底底底');
  };
  return (
    <View>
      <View>测试滚动加载以及下拉刷新</View>
      <View>
        <ScrollView altClassName='h-[240px]' scrollY refresherEnabled enableBackToTop
          upperThreshold={0} onScrollToLower={handleReachBottom}
        >
          <View altClassName='h-[500px]  bg-slate-300'>123123</View>
          <View altClassName='h-[500px] bg-slate-300'>123123</View>
          <View altClassName='h-[500px] bg-slate-300'>123123</View>
          <View altClassName='h-[500px] bg-slate-300'>123123</View>
          <View altClassName='h-[500px] bg-slate-300'>123123</View>
        </ScrollView>
      </View>
      <View altClassName='text-red-600'>---------------------------------------------------</View>
    </View>
  )
}

import React, { Component, useState, } from 'react'
import { Input } from '@tarojs/components'
import './../app.scss'
// eslint-disable-next-line import/first
import { View, Text } from './cross-platform'
// eslint-disable-next-line import/first
import Taro from '@tarojs/taro'

export default function Tabbar(props) {

    const tabbarList = [
        { title: '首页', url: '/pages/index/index', badge: 8 },
        { title: '活动', url: '/pages/act/index' },
        { title: '个人', url: '/pages/user/index', dot: true },
    ]

    //适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
    let iphoneSafeHeight = 0
    Taro.getSystemInfo({
        success: (res) => {
            let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15', '16'];
            model.forEach(item => {
                if (res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
                    iphoneSafeHeight = 5; // pb-5 = 20px
                }
            })
        },
    })
    const pageJump = (item) => {
        Taro.reLaunch({ url: item.url })
    }
    return (
        <View altClassName={`flex flex-row justify-around absolute bottom-0 bg-zinc-500 text-center min-w-full pb-${iphoneSafeHeight}`}>
            {
                tabbarList.map((item, index) => {
                    return (
                        <View onClick={() => pageJump(item)} key={index} altClassName='flex-auto h-12  leading-[3rem] text-center text-cyan-300 '>{item.title}</View>
                    )
                })
            }
        </View >
    )
}

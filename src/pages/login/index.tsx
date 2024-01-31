import Taro from '@tarojs/taro'
import { useEffect, useState, useCallback } from 'react'
import { View, Text, Input, Form, Image } from '../../components/cross-platform'
import { apiLogin } from '../../request/user'
import './index.scss'
import { log } from 'console'

export default function Act() {
  // 获取页面路径
  const path = Taro.Current.router?.path
  // 用户信息
  const [formData, setFormData] = useState({
    name: '309324904@qq.com',
    password: '123456',
    address: '',
    photoList: [] as string[]
  })
  // 页面切换 快速清空表单数据
  // useEffect(() => {
  //   return (() => {
  //     // 清空表单数据
  //     setFormData({
  //       name: '',
  //       password: '',
  //       address: '',
  //       photoList: []
  //     })
  //   })
  // }, [path]);

  // 修改姓名
  const nameChangeHandler = e => {
    setFormData({ ...formData, name: e.detail.value })
  }
  // 修改密码
  const passwordChangeHandler = e => {
    setFormData({ ...formData, password: e.detail.value })
  }
  // 修改收货地址
  const addressChangeHandler = e => {
    setFormData({ ...formData, address: e.detail.value })
  }
  // 点击上传图片
  const chooseImage = async () => {
    const { tempFilePaths } = await Taro.chooseImage({
      count: 6, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机
    })
    setFormData((prevFormData) => ({
      ...prevFormData,
      photoList: [...prevFormData.photoList, ...tempFilePaths],
    }));
  }
  // 请求 - 用户登录
  const getLoginMsg = useCallback(async () => {
    // let account = '309324904@qq.com'
    // let password = '123456'
    let { code, result }: any = await apiLogin(formData.name, formData.password);
    if (code !== 200) return console.log('账户密码错误');
    // 存储token
    Taro.setStorage({ key: 'token', data: result.token })
    // 存储个人信息
    Taro.setStorage({ key: 'userInfo', data: result })
    // 跳转到个人中心
    Taro.switchTab({ url: '/pages/user/index' })
    console.log('act页面准备跳转');
    
    // 清空表单数据
    // setFormData({
    //   name: '',
    //   password: '',
    //   address: '',
    //   photoList: []
    // })
  }, [formData.name, formData.password]);

  // 信息提交 - 用户登录
  const submitForm = async () => {
    getLoginMsg();
  }

  return (
    <View altClassName='min-h-full px-4 py-10'>
      {/* 表单信息填写 */}
      <Form altClassName=''>
        {/* 用户名填写 */}
        <View altClassName='flex flex-row flex-nowrap justify-around items-center mb-4'>
          <Text altClassName='w-20'>用户名</Text>
          <Input
            type='text'
            placeholder='请输入姓名'
            maxlength={20}
            value={formData.name}
            onInput={nameChangeHandler}
            altClassName='flex-1 border-solid border-2 border-r-slate-600 rounded-3xl pl-8 '
          />
        </View>
        {/* 密码填写 */}
        <View altClassName='flex flex-row flex-nowrap justify-around items-center mb-4'>
          <Text altClassName='w-20'>密码</Text>
          <Input type='password'
            password
            placeholder='请输入密码'
            maxlength={16}
            value={formData.password}
            onInput={passwordChangeHandler}
            altClassName='flex-1 border-solid border-2 border-r-slate-600 rounded-3xl pl-8 '
          />
        </View>
        {/* 收货地址填写 */}
        <View altClassName='flex flex-row flex-nowrap justify-around items-center mb-4'>
          <Text altClassName='w-20'>收货地址</Text>
          <Input type='text'
            placeholder='请输入收货地址'
            value={formData.address}
            onInput={addressChangeHandler}
            altClassName='flex-1 border-solid border-2 border-r-slate-600 rounded-3xl pl-8 '
          />
        </View>
        {/* 上传图片 */}
        <View altClassName='flex flex-row flex-nowrap justify-around items-center mb-4'>
          <Text altClassName='w-20'>上传图片</Text>
          <View altClassName='flex-1  flex-row  flex-wrap flex'>
            {formData.photoList.map((item, index) => {
              return (
                <View key={index} altClassName='  w-20 h-20 mb-0.5 mr-0.5'>
                  <Image altClassName=' w-20 h-20 bg-teal-300 ' src={item}></Image>
                </View>
              )
            })}
            {/* 当用户上传图片小于6张 才显示上传按钮 */}
            {formData.photoList.length < 6 && <View altClassName='w-20 h-20 bg-red-600' onClick={chooseImage}>+</View>}
          </View>
        </View>

        <View type='submit' value='提交' onClick={submitForm} altClassName='bg-yellow-300 rounded-3xl w-32 h-7 leading-7 text-center m-auto text-gray-900 '>
          点击提交
        </View>
      </Form>

    </View>
  )
}

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/act/index',
    'pages/user/index',
    'pages/news/index',
    'pages/login/index',
  ],
  tabBar: {
    custom: false,
    color: '#000000',
    // selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'static/icon-home-hot.png',
        selectedIconPath: 'static/icon-home-hot.png',
        text: '首页'
      },
      {
        pagePath: 'pages/act/index',
        iconPath: 'static/icon-class-hot.png',
        selectedIconPath: 'static/icon-class-hot.png',
        text: '活动'
      },
      {
        pagePath: 'pages/user/index',
        iconPath: 'static/icon-user-hot.png',
        selectedIconPath: 'static/icon-user-hot.png',
        text: '个人'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#000',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
  }
})

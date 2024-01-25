/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    // 不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
    preflight: false,
    useDeviceContext: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        disabled: 'rgb(156,163,175)',
        placeholder: 'rgb(209,213,219)'
      }
    }
  }
};

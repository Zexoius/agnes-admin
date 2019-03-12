// ref: https://umijs.org/config/
export default {
  base: '/agnes-admin/',
  publicPath: '/agnes-admin/',
  treeShaking: true,
  plugins: [
    'umi-plugin-gh-pages',
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'agnes-admin',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

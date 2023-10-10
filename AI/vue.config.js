const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 23914,
    client: {
      webSocketURL: 'ws://0.0.0.0:23914/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: [
      'raku.ganxy03.cn', // 允许访问的域名地址，即花生壳内网穿透的地址
    ],

  },
  configureWebpack: {
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        // "url": false
      },
      alias: {
        'url': 'whatwg-url'
      }
    }
  }
  // resolve: {
  //   fallback: {
  //     "crypto": false
  //   }
  // }
})

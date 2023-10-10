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
    }

  }
})

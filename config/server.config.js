// https://webpack.docschina.org/configuration/dev-server/#devserverproxy
module.exports = {

  proxy: [

    {
      context: ['/api/v1/ws'],

      target: 'ws://market.lab.k8s.gddi.com',
      changeOrigin: true,
      logLevel: 'debug',
      ws: true
    },

    {
      context: ['/api'],
      target: 'http://market.lab.k8s.gddi.com',
      changeOrigin: true,
      // xfwd: false,
      secure: false,
    },
    {
      context: ['/upload'],
      target: 'http://market.lab.k8s.gddi.com/',
      changeOrigin: true,
      // xfwd: false,
      secure: false,
    },

  ]

}

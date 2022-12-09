const {createProxyMiddleware}=require('http-proxy-middleware')

module.exports=function(app){
  app.use(
    // 以ajax开头的的请求需要代理
    '/ajax',
    // 往target请求
    createProxyMiddleware({
      target:'https://i.maoyan.com',
      changeOrigin:true
    })
  )
}
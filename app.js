const express = require('express')
const server = express()
// 解决跨域
const cors = require('cors')

server.use(cors())

// 暴露访问图片资源
server.use('/public/upload',express.static(__dirname + '/public/upload'))
// server.use('/public/image',express.static(__dirname + '/public/image'))

// 引入中间件
server.use(express.urlencoded({extended:true}))
server.use(express.json())
// 访问一级路由
server.use('/account',require('./routers/account'))

server.listen(5001,()=>{
    console.log('server up 5001')
})
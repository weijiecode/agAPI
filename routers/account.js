const express = require('express')
const router = express.Router()

//注册
router.post('/register',require('../controller/account').register)
//买家app登录
router.post('/login',require('../controller/account').login)
//获取用户信息
router.post('/userdata',require('../controller/account').userdata)
// 一下管理员和商家api接口
//管理员登录
router.post('/adminlogin',require('../controller/account').adminlogin)

module.exports = router
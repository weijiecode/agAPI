const express = require('express')
const router = express.Router()

//注册
router.post('/register',require('../controller/account').register)
//买家app登录
router.post('/login',require('../controller/account').login)
//获取用户信息
router.post('/userdata',require('../controller/account').userdata)
// 修改密码检查旧密码是否正确
router.post('/checkpassword',require('../controller/account').checkpassword)
// 修改密码
router.post('/updatepassword',require('../controller/account').updatepassword)
// 以下管理员和商家api接口
//管理员登录
router.post('/adminlogin',require('../controller/account').adminlogin)
//商家登录
router.post('/merchantlogin',require('../controller/account').merchantlogin)
//商家注册
router.post('/merregister',require('../controller/account').merregister)
// 管理员获取所有用户数据
router.post('/allusers',require('../controller/account').allusers)
// 管理员修改用户信息
router.post('/edituser',require('../controller/account').edituser)
// 管理员删除用户
router.post('/deluser',require('../controller/account').deluser)
// 查询所有用户名称和id
router.post('/iduser',require('../controller/account').iduser)
module.exports = router
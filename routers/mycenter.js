const express = require('express')
const router = express.Router()
//引入上传模块
const multer = require('multer')
const upload = multer({dest:"./public/upload"})

//修改个人资料
router.post('/updata',require('../controller/account').updata)
// 发送用户头像url
router.post('/photouploadurl',upload.single('file'),require('../controller/account').photouploadurl)
// 修改用户头像
router.post('/updatephoto',require('../controller/account').updatephoto)
// 修改密码
//router.post('/updatepassword',require('../controller/account').updatepassword)

module.exports = router
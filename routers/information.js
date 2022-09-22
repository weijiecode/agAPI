const express = require('express')
const router = express.Router()
//引入上传模块
const multer = require('multer')
const upload = multer({dest:"./public/information"})


// 获取资讯列表
router.get('/getinformation',require('../controller/information').getinformation)
// 新增咨询
router.post('/addinformation',require('../controller/information').addinformation)
// 编辑咨询
router.post('/editinformation',require('../controller/information').editinformation)
// 删除咨询
router.post('/delinformation',require('../controller/information').delinformation)
// 产品图片发送url
router.post('/infophotouploadurl',upload.single('file'),require('../controller/information').infophotouploadurl)
module.exports = router
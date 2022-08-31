const express = require('express')
const router = express.Router()
//引入上传模块
const multer = require('multer')
const upload = multer({dest:"./public/shopphoto"})

//查询商品
router.post('/commodity',require('../controller/shop').commodity)
// 产品图片发送url
router.post('/shopphotouploadurl',upload.single('file'),require('../controller/shop').shopphotouploadurl)
module.exports = router
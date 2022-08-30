const express = require('express')
const router = express.Router()
//引入上传模块
const multer = require('multer')
const upload = multer({dest:"./public/upload"})

//查询商品
router.post('/commodity',require('../controller/shop').commodity)

module.exports = router
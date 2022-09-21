const express = require('express')
const router = express.Router()

// 获取资讯列表
router.get('/getinformation',require('../controller/information').getinformation)
module.exports = router
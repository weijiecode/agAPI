const express = require('express')
const router = express.Router()
//引入上传模块
const multer = require('multer')
const upload = multer({dest:"./public/shopphoto"})

//商家获取自己店铺商品
router.post('/commodity',require('../controller/shop').commodity)
//管理员查询所有商品
router.post('/admincommodity',require('../controller/shop').admincommodity)
//查询商品对应id的店铺名称
router.post('/shopname',require('../controller/shop').shopname)
// 产品图片发送url
router.post('/shopphotouploadurl',upload.single('file'),require('../controller/shop').shopphotouploadurl)
// 添加商品
router.post('/addshop',require('../controller/shop').addshop)
// 添加商品
router.post('/updateshop',require('../controller/shop').updateshop)
// 审核商品
router.post('/updatestatus',require('../controller/shop').updatestatus)
// 通过id查询该id的商品
router.post('/selectshop',require('../controller/shop').selectshop)
// 添加商品到购物车
router.post('/addshopcart',require('../controller/shop').addshopcart)
module.exports = router
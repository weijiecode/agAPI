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
// 查询指定用户的购物车数据
router.post('/selectshopcart',require('../controller/shop').selectshopcart)
// 支付成功后删除购物车数据
router.post('/delshopcart',require('../controller/shop').delshopcart)
// 支付成功后保存数据
router.post('/addpay',require('../controller/shop').addpay)
// 查询所有支付后的数据
router.post('/selectpay',require('../controller/shop').selectpay)
// 取消指定id的订单
router.post('/delpay',require('../controller/shop').delpay)
// 修改指定id的订单
router.post('/updatepay',require('../controller/shop').updatepay)
// 添加商品到收藏
router.post('/addcollect',require('../controller/shop').addcollect)
// 获取该用户是否收藏该商品
router.post('/selectcollect',require('../controller/shop').selectcollect)
// 取消商品到收藏
router.post('/delcollect',require('../controller/shop').delcollect)
// 获取该用户收藏的所有产品
router.post('/selectallcollect',require('../controller/shop').selectallcollect)
// 添加店铺到关注
router.post('/addattention',require('../controller/shop').addattention)
// 获取该用户是否关注店铺
router.post('/selectattention',require('../controller/shop').selectattention)
// 取消店铺关注
router.post('/delattention',require('../controller/shop').delattention)
// 获取该用户关注的所有店铺
router.post('/selectallattention',require('../controller/shop').selectallattention)
// 获取地址
router.post('/selectaddress',require('../controller/shop').selectaddress)
// 添加地址
router.post('/addaddress',require('../controller/shop').addaddress)
// 删除地址
router.post('/deladdress',require('../controller/shop').deladdress)
module.exports = router
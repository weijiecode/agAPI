const db = require('../core/mysql')
class Shop {
    // 商家获取自己店铺所有产品数据
    async commodity(request, resposne, next) {
        let loginSql = 'select * from commodity where merchantid=?'
        let params = [
            request.body.merchantid
        ]
        try {
            let result = await db.exec(loginSql, params)
            // console.log(result[0])
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取商品数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取商品数据失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 查询商品对应id的店铺名称
    async shopname(request, resposne, next) {
        let selectSql = 'select shopname,id from merchant'
        try {
            let result = await db.exec(selectSql)
            // console.log(result[0])
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取店铺名称数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取店铺名称数据失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 修改商品访问次数
    async updateshopcount(request, resposne, next) {
        let updatesql = 'update commodity set count=? where id=?'
        let params = [
            request.body.count,
            request.body.id
        ]
        try {
            let result = await db.exec(updatesql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '修改商品访问成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '修改商品访问失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 管理员获取所有产品数据
    async admincommodity(request, resposne, next) {
        let loginSql = 'select * from commodity order by count DESC'
        try {
            let result = await db.exec(loginSql)
            // console.log(result[0])
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取商品数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取商品数据失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 商家发送图片url
    shopphotouploadurl(request, resposne, next) {
        const file = request.file
        file.url = `http://localhost:5001/public/shopphoto/${file.filename}`
        resposne.json(file.url)
    }

    // 添加商品
    async addshop(request, resposne, next) {
        let insertsql = 'insert into commodity(`title`,`content`,`photo`,`price`,`merchantid`,`status`)values(?,?,?,?,?,?)'
        let params = [
            request.body.title,
            request.body.content,
            request.body.photo,
            request.body.price,
            request.body.merchantid,
            0
        ]
        try {
            let result = await db.exec(insertsql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '添加商品成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '添加商品失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 修改商品
    async updateshop(request, resposne, next) {
        let updatesql = 'update commodity set title=?,content=?,photo=?,price=? where id=?'
        let params = [
            request.body.title,
            request.body.content,
            request.body.photo,
            request.body.price,
            request.body.id
        ]
        try {
            let result = await db.exec(updatesql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '修改商品成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '修改商品失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 修改商品
    async updatestatus(request, resposne, next) {
        let updatesql = 'update commodity set status=? where id=?'
        let params = [
            request.body.status,
            request.body.id
        ]
        try {
            let result = await db.exec(updatesql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '审核产品成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '审核产品失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }
    // 查询指定id的产品
    async selectshop(request, resposne, next) {
        let selectSql = 'select * from commodity where id = ?'
        let params = [
            request.body.id
        ]
        try {

            let result = await db.exec(selectSql, params)
            // console.log(result[0])
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取商品数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取商品数据失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 添加商品到购物车
    async addshopcart(request, resposne, next) {
        let insertsql = 'insert into shoppingcart(`commodityid`,`userid`)values(?,?)'
        let params = [
            request.body.commodityid,
            request.body.userid
        ]
        try {
            let result = await db.exec(insertsql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '添加商品到购物车成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '添加商品到购物车失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 查询指定用户id的购物车
    async selectshopcart(request, resposne, next) {
        let selectSql = 'select * from shoppingcart where userid = ?'
        let params = [
            request.body.userid
        ]
        try {

            let result = await db.exec(selectSql, params)
            // console.log(result[0])
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取购物车数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取购物车数据失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }
    // 支付成功后删除购物车数据
    async delshopcart(request, resposne, next) {
        let delSql = 'delete from shoppingcart where userid=?'
        let params = [
            request.body.userid
        ]
        try {

            let result = await db.exec(delSql, params)
            // console.log(result[0])
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '支付成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '支付失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }
    // 删除指定购物车数据
    async delcart(request, resposne, next) {
        let delSql = 'delete from shoppingcart where id=?'
        let params = [
            request.body.id
        ]
        try {

            let result = await db.exec(delSql, params)
            // console.log(result[0])
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '删除成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '删除失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }
    // 支付成功后保存数据
    async addpay(request, resposne, next) {
        let insertsql = 'insert into payed(`commodityId`,`userId`,`address`,`remark`)values(?,?,?,?)'
        let params = [
            request.body.commodityId,
            request.body.userId,
            request.body.address,
            request.body.remark
        ]
        try {
            let result = await db.exec(insertsql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '支付成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '支付失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 查询所有支付后的数据
    async selectpay(request, resposne, next) {
        let selectSql = 'select * from payed'
        try {
            let result = await db.exec(selectSql)
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取支付数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取支付数据失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 取消指定id的订单
    async delpay(request, resposne, next) {
        let delSql = 'delete from payed where id=?'
        let params = [
            request.body.id
        ]
        try {
            let result = await db.exec(delSql, params)
            // console.log(result[0])
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '取消订单成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '取消订单失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }


    // 修改指定id的订单
    async updatepay(request, resposne, next) {
        let updatesql = 'update payed set remark=?,address=? where id=?'
        let params = [
            request.body.remark,
            request.body.address,
            request.body.id
        ]
        try {
            let result = await db.exec(updatesql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '修改订单成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '修改订单失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 添加商品到收藏
    async addcollect(request, resposne, next) {
        let insertsql = 'insert into collect(`userId`,`commodityId`)values(?,?)'
        let params = [
            request.body.userId,
            request.body.commodityId
        ]
        try {
            let result = await db.exec(insertsql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '添加商品收藏成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '添加商品收藏失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 获取该用户是否收藏该商品
    async selectcollect(request, resposne, next) {
        let selectSql = 'select * from collect where userId=? and commodityId=?'
        let params = [
            request.body.userId,
            request.body.commodityId
        ]
        try {
            let result = await db.exec(selectSql, params)
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取收藏数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取收藏数据失败',
                    data: result
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 获取该用户收藏的所有产品
    async selectallcollect(request, resposne, next) {
        let selectSql = 'select * from collect where userId=?'
        let params = [
            request.body.userId,
        ]
        try {
            let result = await db.exec(selectSql, params)
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取收藏数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取收藏数据失败',
                    data: result
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 取消商品到收藏
    async delcollect(request, resposne, next) {
        let delSql = 'delete from collect where userId=? and commodityId=?'
        let params = [
            request.body.userId,
            request.body.commodityId
        ]
        try {

            let result = await db.exec(delSql, params)
            // console.log(result[0])
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '取消成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '取消失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 添加店铺到关注
    async addattention(request, resposne, next) {
        let insertsql = 'insert into attention(`userId`,`merchantId`)values(?,?)'
        let params = [
            request.body.userId,
            request.body.merchantId
        ]
        try {
            let result = await db.exec(insertsql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '关注店铺成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '关注店铺失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 获取该用户是否关注该店铺
    async selectattention(request, resposne, next) {
        let selectSql = 'select * from attention where userId=? and merchantId=?'
        let params = [
            request.body.userId,
            request.body.merchantId
        ]
        try {
            let result = await db.exec(selectSql, params)
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取关注数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取关注数据失败',
                    data: result
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 获取该用户关注的所有店铺
    async selectallattention(request, resposne, next) {
        let selectSql = 'select * from attention where userId=?'
        let params = [
            request.body.userId,
        ]
        try {
            let result = await db.exec(selectSql, params)
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取关注数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取关注数据失败',
                    data: result
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 取消店铺关注
    async delattention(request, resposne, next) {
        let delSql = 'delete from attention where userId=? and merchantId=?'
        let params = [
            request.body.userId,
            request.body.merchantId
        ]
        try {

            let result = await db.exec(delSql, params)
            // console.log(result[0])
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '取消成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '取消失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 获取地址
    async selectaddress(request, resposne, next) {
        let selectSql = 'select * from users where id=?'
        let params = [
            request.body.userId,
        ]
        try {
            let result = await db.exec(selectSql, params)
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取地址成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取地址失败',
                    data: result
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 添加地址
    async addaddress(request, resposne, next) {
        let insertsql = 'update users set address=? where id=?'
        let params = [
            request.body.address,
            request.body.userId
        ]
        try {
            let result = await db.exec(insertsql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '添加地址成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '添加地址失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 删除地址
    async deladdress(request, resposne, next) {
        let delSql = 'update users set address=? where id=?'
        let params = [
            request.body.address,
            request.body.userId
        ]
        try {
            let result = await db.exec(delSql, params)
            // console.log(result[0])
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '删除成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '删除失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }

    // 查询是否领取优惠券
    async selectprice(request, resposne, next) {
        let selectSql = 'select discount from users where id = ?'
        let params = [
            request.body.id
        ]
        try {
            let result = await db.exec(selectSql, params)
            // console.log(result[0])
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '获取数据成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '获取数据失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }
    // 领取优惠券
    async addprice(request, resposne, next) {
        let insertsql = 'update users set discount=? where id=?'
        let params = [
            request.body.discount,
            request.body.id
        ]
        try {
            let result = await db.exec(insertsql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '添加成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '添加失败'
                })
            }
        } catch (error) {
            resposne.json({
                code: -201,
                msg: '服务器异常',
                error
            })
        }
    }


}

module.exports = new Shop
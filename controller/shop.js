const db = require('../core/mysql')
class Shop {
    // 获取用户数据
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
            let result = await db.exec(insertsql,params)
            if(result && result.affectedRows >= 1) {
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
                let result = await db.exec(updatesql,params)
                if(result && result.affectedRows >= 1) {
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

}

module.exports = new Shop
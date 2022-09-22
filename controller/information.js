const db = require('../core/mysql')
// 时间日期
const moment = require('moment')

class information {
    // 查询资讯列表
    async getinformation(request, resposne, next) {
        let seleSql = 'select * from information'
        try {
            let result = await db.exec(seleSql)
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
    // 添加咨询
    async addinformation(request, resposne, next) {
        let insertsql = 'insert into information(`title`,`content`,`picture`,`datetime`)values(?,?,?,?)'
        let params = [
            request.body.title,
            request.body.content,
            request.body.picture,
            moment().format('YYYY-MM-DD HH:mm:ss')
        ]
        try {
            let result = await db.exec(insertsql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '添加咨询成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '添加咨询失败'
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
    // 修改咨询
    async editinformation(request, resposne, next) {
        let updatesql = 'update information set title=?,content=?,picture=? where id=?'
        let params = [
            request.body.title,
            request.body.content,
            request.body.picture,
            request.body.id
        ]
        try {
            let result = await db.exec(updatesql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '修改咨询成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '修改咨询失败'
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
    // 删除咨询
    async delinformation(request, resposne, next) {
        let delSql = 'delete from information where id=?'
        let params = [
            request.body.id
        ]
        try {

            let result = await db.exec(delSql, params)
            // console.log(result[0])
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '删除咨询成功',
                    data: result,
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '删除咨询失败'
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

    // 上传咨询图片url
    infophotouploadurl(request, resposne, next) {
        const file = request.file
        file.url = `http://localhost:5001/public/information/${file.filename}`
        resposne.json(file.url)
    }
}

module.exports = new information 
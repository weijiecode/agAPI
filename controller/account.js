const db = require('../core/mysql')

class Account {
    // 注册
    async register(request, resposne, next) {
        let insertSql = 'insert into users(`username`,`password`,`nickname`,`sex`,`phone`,`createtime`)values(?,?,?,?,?,?)'
        let params = [
            request.body.reg_username,
            md5(request.body.reg_password + require('../config/index').key),
            request.body.reg_nickname,
            request.body.reg_sex,
            request.body.reg_phone,
            moment().format('YYYY-MM-DD HH:mm:ss')
        ]
        try {
            let result = await db.exec(insertSql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '注册成功',
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '注册失败'
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
    // PC登录
    async login(request, resposne, next) {
        let loginSql = 'select * from users where username=? and password=?'
        let params = [
            request.body.username,
            request.body.password
        ]
        try {
            let result = await db.exec(loginSql, params)
            // console.log(result[0])
            if (result && result.length >= 1) {
                resposne.json({
                    code: 200,
                    msg: '登录成功',
                    data: result[0],
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '账号或密码错误'
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

module.exports = new Account
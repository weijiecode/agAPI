const db = require('../core/mysql')

class Account {
    // 注册
    async register(request, resposne, next) {
        let insertSql = 'insert into users(`username`,`password`,`nickname`,`sex`,`phone`,`email`)values(?,?,?,?,?,?)'
        let params = [
            request.body.reg_username,
            request.body.reg_password,
            request.body.reg_nickname,
            request.body.reg_sex,
            request.body.reg_phone,
            request.body.reg_email
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
    // 登录
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
    // 获取用户数据
    async userdata(request, resposne, next) {
        let loginSql = 'select nickname,introduction,photo,email,phone,username,sex from users where id=?'
        let params = [
            request.body.id
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
    // 修改个人资料
    async updata(request, resposne, next) {
        let updateSql = 'update users set nickname=?,introduction=?,sex=?,phone=?,email=? where id=?'
        let params = [
            request.body.nickname,
            request.body.introduction,
            request.body.sex,
            request.body.phone,
            request.body.email,
            request.body.id
        ]
        try {
            let result = await db.exec(updateSql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '修改用户数据成功'
                })
            } else {
                resposne.json({
                    code: 201,
                    msg: '修改用户数据失败，请重试'
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
    // 移动端发送用户头像url
    photouploadurl(request, resposne, next) {
        const file = request.file
        file.url = `http://localhost:5001/public/upload/${file.filename}`
        resposne.json(file.url)
    }
    // 修改用户头像
    async updatephoto(request, resposne, next) {
        let updateSql = 'update users set photo=? where id=?'
        let params = [
            request.body.photo,
            request.body.id
        ]
        //console.log(request.body.oldphoto)
        try {
            let result = await db.exec(updateSql, params)
            if (result && result.affectedRows >= 1) {
                resposne.json({
                    code: 200,
                    msg: '修改用户头像成功'
                })
                console.log(request.body.oldphoto)
                // 判断是否有旧头像，更换新头像后删除旧头像
                // if (request.body.oldphoto != null) {
                //     let delphoto = path.resolve(__dirname, '../public/upload/') + '/' + request.body.oldphoto.split('/').pop()
                //     //console.log(delphoto)
                //     try { fs.unlinkSync(delphoto); } catch (error) { }
                // }
            } else {
                resposne.json({
                    code: 201,
                    msg: '修改用户失败，请重试'
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
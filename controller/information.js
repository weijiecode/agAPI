const db = require('../core/mysql')
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
}

module.exports = new information 
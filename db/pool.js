'use strict';
//获取连接池以及链接并对查询字符串方法的简单封装
var mysql = require('mysql');
var pool = global.pool;
if (!pool) {
    //创建连接池
    pool = mysql.createPool({
        database: 'exam',
        user: 'root',
        password: 'root'
    });
    //将连接挂载到global
    global.pool = pool;
}
//获取连接
function getConnection() {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, conn) {
            if (!err) {
                resolve(conn);
            } else {
                reject(err);
            }
        });
    });
}
//执行sql   对查询字符串方法的简单封装
function execute(sql) {
    return new Promise(function (resolve, reject) {
        var connection;
        getConnection().then(function (conn) {
            connection = conn;
            conn.query(sql, function (err, result) {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        }).catch(function (err) {
            reject(err);
        }).finally(function () {
            if (connection) {
                connection.release();
                console.log("释放完成");
            }
        });
    });
}
module.exports = {
    getConnection: getConnection,
    execute: execute
};


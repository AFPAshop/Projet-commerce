const conn = require('./mysqlconfig.js');

exports.getAll = function (table, callback) {
    var sql = "SELECT * FROM " + table;
    conn.query(sql, function (error, rows) {
        if (error) {
            console.log(error);
        }
        callback(rows);
    })
}

exports.createarticles = function (table, datas, callback) {
    var sql = "INSERT INTO " + table + " VALUES(NULL,'" + datas.nom + "','" + datas.prix + "','" + datas.quantite + "'); ";
    console.log(sql);
    conn.query(sql, function (error) {
        if (error) {
            console.log(error);
        }
        callback();
    })
}

exports.getOne = function (table, id, callback) {
    var sql = "SELECT * FROM " + table + " WHERE id=" + id;
    console.log(sql);
    conn.query(sql, function (error, rows) {
        if (error) {
            console.log(error);
        }
        callback(rows);
    })
}

exports.updateArticle = function (table, id, datas, callback) {
    var sql = "UPDATE " + table + " SET nom ='" + datas.nom + "',prix ='" + datas.prix + "',quantite ='" + datas.quantite + "' WHERE id ='" + id + "'";
    console.log(sql);
    conn.query(sql, function (error) {
        if (error) {
            console.log(error);
        }
        callback();
    })

}
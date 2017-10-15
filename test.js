var db = require('./db/pool');

db.execute('SELECT * FROM tbl_exam_topic').then(function(results){
    console.log(results);
}).catch(function(err){
    console.log(err);
})
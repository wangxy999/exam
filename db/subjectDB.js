// "use strict";//调用pool.js里边的数据库查询方法,去实现各个查询 //查询类型的sql语句

var pool = require('./pool');

module.exports = {
    
    getAllSubjectType: function getAllSubjectType() {
        var sql = "select * from tbl_exam_subjecttype"; 
        return pool.execute(sql);
    },
    getAllSubjectLevel: function getAllSubjectLevel() {
        var sql = "select * from tbl_exam_subjectlevel";
        return pool.execute(sql);
    },
    getAllDepartmentes: function getAllDepartmentes() {
        var sql = "select * from tbl_exam_epartment";
        return pool.execute(sql);
    },
    getAllTopics: function getAllTopics() {
        var sql = "select * from tbl_exam_topic";
        return pool.execute(sql);
    },
    getAllSubjects: function getAllSubjects(subjectType_id, subjectLevel_id, department_id, topic_id) {
        var sql = "select * from tbl_exam_subject where subjectType_id=" + subjectType_id + " and subjectLevel_id=" + subjectLevel_id + " and department_id=" + department_id + " and topic_id=" + topic_id + " ";
        // console.log(sql);
        return pool.execute(sql);
    },
    checkSubject: function checkSubject(subject_id, check) {
        console.log(check);
        var sql = "update tbl_exam_subject set checkState='" + check + "' where id= " + subject_id + " ";
        return pool.execute(sql);
    },
    choiceSubject: function choiceSubject(subject_id) {
        var sql = "select * from tbl_exam_choice where subject_id=" + subject_id;
        // console.log(sql);
        return pool.execute(sql);
    }
};


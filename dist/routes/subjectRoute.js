'use strict';

var express = require('express');
var route = express.Router();
var subjectDB = require('../db/subjectDB');

//获取所有题目类型
route.get('/getAllSubjectType', function (req, resp) {
    subjectDB.getAllSubjectType().then(function (data) {
        resp.send(data);
    }).catch(function (error) {
        resp.send(error);
    });
});
//获取难易程度数据
route.get('/getAllSubjectLevel', function (req, resp) {
    subjectDB.getAllSubjectLevel().then(function (data) {
        resp.send(data);
    }).catch(function (error) {
        resp.send(error);
    });
});
//获取方向数据
route.get('/getAllDepartmentes', function (req, resp) {
    subjectDB.getAllDepartmentes().then(function (data) {
        resp.send(data);
    }).catch(function (error) {
        resp.send(error);
    });
});
//获取知识点数据
route.get('/getAllTopics', function (req, resp) {
    subjectDB.getAllTopics().then(function (data) {
        resp.send(data);
    }).catch(function (error) {
        resp.send(error);
    });
});

//显示题型
route.post('/getAllSubjects', function (req, resp) {
    // console.log(req.body);
    var queryInfo = req.body;
    var subjectType_id = queryInfo['subject.subjectType.id'];
    var subjectLevel_id = queryInfo['subject.subjectLevel.id'];
    var department_id = queryInfo['subject.department.id'];
    var topic_id = queryInfo['subject.topic.id'];
    // console.log("----------",subjectType_id);
    subjectDB.getAllSubjects(subjectType_id, subjectLevel_id, department_id, topic_id).then(function (data) {
        // console.log(data);
        resp.send(data);
    }).catch(function (error) {
        resp.send(error);
    });
});

//审核通过
route.post('/checkSubject', function (req, resp) {
    var subject_checkState = req.body.subject_checkState;
    var subject_id = req.body.subject_id;
    // console.log(subject_id);
    subjectDB.checkSubject(subject_id, subject_checkState).then(function (data) {
        // console.log(data);
        resp.send(data);
    }).catch(function (error) {
        resp.send(error);
    });
});
//显示选项
route.post('/choiceSubject', function (req, resp) {
    var subjectId = req.body.subjectId;
    console.log(subjectId);
    subjectDB.choiceSubject(subjectId).then(function (data) {
        resp.send(data);
        console.log(data);
    }).catch(function (error) {
        resp.send(error);
    });
});
module.exports = route;
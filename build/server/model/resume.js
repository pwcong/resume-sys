'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var experienceSchema = _mongoose2.default.Schema({

    title: String, // 项目标题 
    startDate: Date, // 项目开始日期
    endDate: Date, // 项目结束日期
    role: String, // 角色 
    summary: String // 简介

});

var educationSchema = _mongoose2.default.Schema({

    name: String, // 学校名字 
    startDate: Date, // 就读日期
    endDate: Date, // 毕业日期
    degree: String, // 学位 
    major: String, // 专业
    summary: String // 简介

});

var workSchema = _mongoose2.default.Schema({

    name: String, // 单位名字 
    startDate: Date, // 工作日期
    endDate: Date, // 辞职日期
    job: String, // 职位
    summary: String // 简介

});

var skillSchema = _mongoose2.default.Schema({

    name: String, // 技能名称
    level: {
        type: Number, // 熟练度，0 - 100
        default: 0
    }

});

var schema = _mongoose2.default.Schema({
    uid: String, // 唯一账号
    info: { // 个人信息
        name: String, // 姓名
        sex: { // 性别
            type: Number,
            default: 0
        },
        birthday: Date, // 生日
        phone: String, // 手机
        email: String, // 邮箱
        blog: String, // 博客
        github: String, // Github 
        intro: String },
    experience: { // 项目经验
        display: {
            type: Boolean,
            default: false
        },
        list: [experienceSchema]
    },
    education: { // 教育经历
        display: {
            type: Boolean,
            default: false
        },
        list: [educationSchema]
    },
    work: { // 工作经历
        display: {
            type: Boolean,
            default: false
        },
        list: [workSchema]
    },
    hope: { // 工作期望
        display: {
            type: Boolean,
            default: false
        },
        job: String, // 职位  
        type: String, // 实习/全职/兼职
        city: String, // 城市
        salary: String // 薪资

    },
    skill: { // 技能评价
        display: {
            type: Boolean,
            default: false
        },
        list: [skillSchema]
    }

});

var model = _mongoose2.default.model('resume', schema);

exports.default = model;
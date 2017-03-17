import { browser, language } from './index';

const webpSupport = (browser === 'Opera' || browser === 'Chrome') ? 'support' : 'unsupport';

export const img = {

    bg: {
        support: '/img/bg.webp',
        unsupport: '/img/bg.jpg'
    },
    banner: {
        support: '/img/banner.webp',
        unsupport: '/img/banner.jpg'
    }
    

}

export const imgUrl = {

    bg: img.bg[webpSupport],
    banner: img.banner[webpSupport]

}

export const string = {

    
    username: {
        'zh-CN': '用户名',
        'en': 'Username'
    },
    password: {
        'zh-CN': '密码',
        'en': 'Password'
    },
    login: {
        'zh-CN': '登陆',
        'en': 'Login'
    },
    logining: {
        'zh-CN': '正在登陆中',
        'en': 'Logining'
    },
    register: {
        'zh-CN': '注册',
        'en': 'Register'
    },
    registering: {
        'zh-CN': '正在注册中',
        'en': 'Registering'
    },
    submit: {
        'zh-CN': '提交',
        'en': 'Submit'
    },
    getResumeSuccessfully: {
        'zh-CN': '简历信息获取成功',
        'en': 'Get resume successfully'
    },
    getResumeFailed: {
        'zh-CN': '简历信息获取失败',
        'en': 'Get resume failed'
    },
    check: {
        'zh-CN': '确定',
        'en': 'Check'
    },
    cancel: {
        'zh-CN': '取消',
        'en': 'Cancel'
    },
    intro: {
        'zh-CN': '简介',
        'en': 'Introduction'
    },
    name: {
        'zh-CN': '姓名',
        'en': 'Name'
    },
    sex: {
        'zh-CN': '性别',
        'en': 'Sex'
    },
    birthday: {
        'zh-CN': '生日',
        'en': 'Birthday'
    },
    avatar: {
        'zh-CN': '头像',
        'en': 'Avatar'
    },
    avatarUrl: {
        'zh-CN': '头像地址',
        'en': 'Avatar URL'
    },
    phone: {
        'zh-CN': '手机',
        'en': 'Phone'
    },
    email: {
        'zh-CN': '邮箱',
        'en': 'Email'
    },
    record: {
        'zh-CN': '学历',
        'en': 'Record'
    },
    github: {
        'zh-CN': 'Github',
        'en': 'Github'
    },
    blog: {
        'zh-CN': '博客',
        'en': 'Blog'
    },
    male: {
        'zh-CN': '男',
        'en': 'Male'
    },
    female: {
        'zh-CN': '女',
        'en': 'Female'
    },
    unknown: {
        'zh-CN': '未知',
        'en': '?'
    },
    projectExperience: {
        'zh-CN': '项目经验',
        'en': 'Experience of Project'
    },
    add: {
        'zh-CN': '添加',
        'en': 'Add'
    },
    projectTitle: {
        'zh-CN': '项目名称',
        'en': 'Title of Project '
    },
    projectCycle: {
        'zh-CN': '项目周期',
        'en': 'Cycle of Project'
    },
    startDate: {
        'zh-CN': '开始日期',
        'en': 'Start Date'
    },
    endDate: {
        'zh-CN': '结束日期',
        'en': 'End Date'
    },
    role: {
        'zh-CN': '角色',
        'en': 'Role'
    },
    summary: {
        'zh-CN': '描述',
        'en': 'Summary'
    },
    companyName: {
        'zh-CN': '公司名字',
        'en': 'Company Name'
    },
    workCycle: {
        'zh-CN': '任职周期',
        'en': 'Work Cycle'
    },
    job: {
        'zh-CN': '职位',
        'en': 'Job'
    },
    workExperience: {
        'zh-CN': '工作经验',
        'en': 'Experience of Work'
    },
    educationExperience: {
        'zh-CN': '教育经历',
        'en': 'Experience of Education'
    },
    schoolName: {
        'zh-CN': '学校名称',
        'en': 'School Name'
    },
    degree: {
        'zh-CN': '学位',
        'en': 'Degree'
    },
    major: {
        'zh-CN': '专业',
        'en': 'Major'
    },
    salary: {
        'zh-CN': '薪资',
        'en': 'Salary'
    },
    type: {
        'zh-CN': '类型',
        'en': 'Type'
    },
    jobHope: {
        'zh-CN': '职位期望',
        'en': 'Hope of Job'
    },
    city: {
        'zh-CN': '城市',
        'en': 'City'
    },
    skillInfo: {
        'zh-CN': '技能信息',
        'en': 'Info of Skill'
    },
    skillName: {
        'zh-CN': '技能名称',
        'en': 'Name of Skill'
    },
    skillLevel: {
        'zh-CN': '技能等级',
        'en': 'Level of Skill'
    },
    personalEvaluation: {
        'zh-CN': '个人评价',
        'en': 'Personal Evaluation'
    },
    submitModification: {
        'zh-CN': '提交修改',
        'en': 'Submit Modification'
    },
    publishResume: {
        'zh-CN': '发布简历',
        'en': 'Publish Resume'
    },
    refreshResume: {
        'zh-CN': '刷新简历',
        'en': 'Refresh Resume'
    },
    modifyResumeSuccessfully: {
        'zh-CN': '简历信息修改成功',
        'en': 'Modify Resume Successfully'
    },
    modifyResumeFailed: {
        'zh-CN': '简历信息修改失败',
        'en': 'Modify Resume Failed'
    },
    publishResumeSuccessfully: {
        'zh-CN': '简历发布成功',
        'en': 'Publish Resume Successfully'
    },
    publishResumeFailed: {
        'zh-CN': '简历发布失败',
        'en': 'Publish Resume Failed'
    },
    exitSys: {
        'zh-CN': '退出系统',
        'en': 'Exit System'
    },
    back: {
        'zh-CN': '返回',
        'en': 'Back'
    }


}

export const translated = {
    appName: 'Resume Sys',
    username: string.username[language],
    password: string.password[language],
    login: string.login[language],
    logining: string.logining[language],
    register: string.register[language],
    registering: string.registering[language],
    submit: string.submit[language],
    getResumeSuccessfully: string.getResumeSuccessfully[language],
    getResumeFailed: string.getResumeFailed[language],
    check: string.check[language],
    cancel: string.cancel[language],
    intro: string.intro[language],
    name: string.name[language],
    sex: string.sex[language],
    birthday: string.birthday[language],
    phone: string.phone[language],
    email: string.email[language],
    avatar: string.avatar[language],
    avatarUrl: string.avatarUrl[language],
    blog: string.blog[language],
    github: string.github[language],
    record: string.record[language],
    male: string.male[language],
    female: string.female[language],
    unknown: string.unknown[language],
    projectExperience: string.projectExperience[language],
    add: string.add[language],
    projectTitle: string.projectTitle[language],
    projectCycle: string.projectCycle[language],
    startDate: string.startDate[language],
    endDate: string.endDate[language],
    role: string.role[language],
    summary: string.summary[language],
    companyName: string.companyName[language],
    job: string.job[language],
    workCycle: string.workCycle[language],
    workExperience: string.workExperience[language],
    schoolName: string.schoolName[language],
    degree: string.degree[language],
    major: string.major[language],
    educationExperience: string.educationExperience[language],
    type: string.type[language],
    salary: string.salary[language],
    jobHope: string.jobHope[language],
    city: string.city[language],
    skillInfo: string.skillInfo[language],
    skillLevel: string.skillLevel[language],
    skillName: string.skillName[language],
    personalEvaluation: string.personalEvaluation[language],
    submitModification: string.submitModification[language],
    publishResume: string.publishResume[language],
    refreshResume: string.refreshResume[language],
    modifyResumeSuccessfully: string.modifyResumeSuccessfully[language],
    modifyResumeFailed: string.modifyResumeFailed[language],
    publishResumeSuccessfully: string.publishResumeSuccessfully[language],
    publishResumeFailed: string.publishResumeFailed[language],
    exitSys: string.exitSys[language],
    back: string.back[language]
    
}
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
    male: string.male[language],
    female: string.female[language],
    unknown: string.unknown[language]

}
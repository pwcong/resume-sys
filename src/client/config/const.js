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
    getResumeFailed: string.getResumeFailed[language]

}
const isProd = process.env.NODE_ENV === 'production';

module.exports = {

    host: 'localhost',
    port: isProd ? 80 : 4000,
    api: {
        login: {
            url: '/login',
            method: 'POST'
        },
        register: {
            url: '/register',
            method: 'POST'
        },
        getResume: {
            url: '/resume/:uid',
            path: '/resume/',
            method: 'GET'
        },
        modifyResume: {
            url: '/resume/modify',
            method: 'POST'
        },
        publishResume: {
            url: '/resume/publish',
            method: 'POST'
        },
        displayResume: {
            url: '/:uid',
            method: 'GET'
        }
    }

}
const isProd = process.env.NODE_ENV === 'production';

module.exports = {

    port: isProd ? 80 : 4000,
    mongodb: {
        uri: 'mongodb://localhost/resumesys',
        options: {
            server: {
                poolSize: 8
            }
        }
    },
    redis: {
        host: '127.0.0.1',
        port: 6379
    }

}
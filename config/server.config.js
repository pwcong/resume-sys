const isProd = process.env.NODE_ENV === 'production';

module.exports = {

    port: isProd ? 80 : 4000,
    mongodbUrl: 'mongodb://localhost/resumesys'

}
import mongoose from 'mongoose';

const schema = mongoose.Schema({
    uid: String,            // 账号
    pwd: String,            // 密码
});

const model = mongoose.model('user', schema);

export default model;

import {Schema} from 'mongoose';

const schema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true}
});

export default schema;

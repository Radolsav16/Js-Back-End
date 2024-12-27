const {Schema , model , SchemaTypes:Types } = require('mongoose');


const UserSchema = new Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
    }
})

const User = model('User',UserSchema);


module.exports = {
    User
}
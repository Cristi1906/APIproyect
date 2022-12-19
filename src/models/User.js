
import mongoose, {Schema, model} from 'mongoose'
import bcryt  from 'bcryptjs'


const userSchema = new Schema({
    username: {
        type: String, 
        unique: true
    }, 
    email: {
        type: String, 
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Role", 
        type: Schema.Types.ObjectId
    }]
  }, {
    timestamps: true, 
    versionKey: false,
}); 



//encriptar contraseña usuario
userSchema.statics.encryptPassword = async (password) =>{
   const salt = await bcryt.genSalt(10)
   return await bcryt.hash(password,salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) =>{
    return await bcryt.compare(password, receivedPassword)
}



//export default model('User', userSchema); 
module.exports = mongoose.model('User', userSchema);
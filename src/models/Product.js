import {Schema, model} from 'mongoose'

//const mongoosePaginate = require('mongoose-paginate-v2');

//que campos vamos a guardar en la DB
const productSchema = new Schema({
    name: String,
    category: String,
    phase: String,
    desciption: String
}, {
    timestamps: true, 
    versionKey: false
})

//paginación
//productSchema.plugin(mongoosePaginate);
//module.exports = mongoose.model('Product', productSchema);
export default model('mongoose', productSchema);
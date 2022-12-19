import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/proyectosApi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log({message: 'DB is connected'}))
    .catch(error => console.log({message: 'error'}))
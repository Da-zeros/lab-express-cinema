const mongoose = require('mongoose') 
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true, // este elemento es obligatorio, si no, error!
        unique: true // este elemento no puede repetirse, si se fuese a repetir, error!
      },
    director:String,
    stars:Array,
    image:String,
    description:String,
    showtimes:Array,
})

 const MovieModel = mongoose.model("movie", movieSchema);
 module.exports =  MovieModel
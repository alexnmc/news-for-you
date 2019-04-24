const mongoose = require('mongoose')
const Schema = mongoose.Schema




const articlesSchema = new Schema({
    title: {
        type: String,
    },

    urlToImage: {
        type:String
    },

    description: {
        type: String
    },
    
    userID:{
     type: String
    }
})

module.exports = mongoose.model("articles", articlesSchema)



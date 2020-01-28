const express = require('express')
const newsRouter = express.Router()
const Article = require("../models/articles")



newsRouter.get('/:id', (req, res) => {    // get all by userID 
    
    Article.find({userID: req.params.id} , (err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

module.exports = newsRouter

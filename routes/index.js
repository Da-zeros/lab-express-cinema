const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/*GET movies*/ 
router.get('/movies', async (req, res, next) => {
    try {
        const movieList = await MovieModel.find()
        res.render('movies',{movieList})
    } catch (error) {
        
    }
})

router.get('/movies/:moviesId', async (req, res, next) => {
    try {
        const {moviesId} = req.params
        console.log(moviesId)
        const peli =  await MovieModel.findById(moviesId)
        console.log(peli)
        res.render('movie',{peli})
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;

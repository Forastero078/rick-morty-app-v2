const { getCharById } = require("../controllers/getCharById.js");
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');
const { Router } = require("express");

const router = Router();


router.get('/rickandmorty/character/:id', (req, res) => {
    return getCharById(req, res);
});

router.get('/rickandmorty/login', (req, res) => {
    return login(req, res);
});

router.post('/rickandmorty/fav', (req, res) => {
    return postFav(req, res);
});

router.delete('/rickandmorty/fav/:id', (req, res) => {
    return deleteFav(req, res);
});


module.exports = {
    router
};



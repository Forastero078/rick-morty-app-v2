const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/";



function getCharById(req, res){
    const { id } = req.params;

    
    axios.get(`${URL}${id}`)
    .then((response) => {
        if(!response.data){
            res.status(404).send('Not fount');
        } else {
            return response.data
        }
    })
          .then(response => res.json({
            id: response.id,
            status: response.status,
            name: response.name,
            species: response.species,
            origin: response.origin,
            image: response.image,
            gender: response.gender
          }))
          .catch(err => res.status(500).send(err.message));
}

module.exports = {
    getCharById
}
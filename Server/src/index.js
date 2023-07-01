const { router } = require('./routes/index');

const express = require('express');

const server = express();

const PORT = 3001;

let url;

server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 


 
//  server.use((req, res, next) => {
//     req.url = '/rickandmorty' + req.originalUrl.slice(13)
    
//     console.log(req.url);
//     next();
// });
    
server.use(router);


server.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT}`);
    // console.log(url);
});

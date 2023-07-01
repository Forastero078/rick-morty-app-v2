let http = require('http');
let data = require('./utils/data.js');

let PORT = 3001;


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.url.includes('/rickandmorty/character')){
        let indexId = req.url.indexOf('r/');
        let id = req.url.slice(indexId + 2, req.url.length);
        
        // res.end(() => console.log(data))
        for (let i = 0; i < data.length; i++){
            if(data[i].id === Number(id)){
                let dataJson = JSON.stringify(data[i])
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(dataJson);
            }
        }

    }
}).listen(PORT, 'localhost');
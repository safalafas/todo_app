const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.set('views', process.cwd()+'/views');

server.get('/', (req, res)=>{
    res.render('index', {title:'Home', message:'Hello World'});
});

server.listen(80, ()=>{
    console.log('http://localhost');
});
const express = require('express')
const app = express()
const path = require('path');
const port = 3333

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.listen(port, () => console.log(`Servidor aberto na porta => ${port}!`)); 
// Test
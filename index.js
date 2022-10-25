const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const data = require('./data/data.json')

app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/data', (req, res) =>{
    res.send(data);
});

app.get('/data/courses/:id', (req, res) =>{
    const id =req.params.id;
    const selectedCourse = data.find(d => d.id === id);
    res.send(selectedCourse);
    
})

app.listen(port, () => {
    console.log('server running on port:', port);
    
})
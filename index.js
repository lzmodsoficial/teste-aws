const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/' , (req, res) => {
    res.json({status: 'online'})
});

app.get('/teste', (req, res) => {
    res.json({msg: 'sucesso!'})
})

app.listen(3000, () => {
    console.log('server running on port: 3000');
})
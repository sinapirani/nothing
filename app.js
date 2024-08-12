

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);

    res.send('ok')
})

app.post('/post', (req, res) => {

    console.log(req.query);
    console.log(req.body);

    res.send('Hello World!');

})

app.listen(port, () => console.log('Started server on port ' + port));

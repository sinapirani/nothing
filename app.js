

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/post', (req, res) => {
    console.log(req.query);
    console.log(req.body);

    res.send('ok')
})

app.post('/post', (req, res) => {

    console.log(req.query);
    console.log(req.body);

    res.send('Hello World!');

})

app.listen(process.env.PORT || port, () => console.log('Started server on port ' + port));

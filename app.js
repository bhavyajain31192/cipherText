const express = require('express')
const app = express();
const port = 8081;
const bodyParser = require('body-parser');
const cipherControllers = require('./Controllers/cipher');
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.route("/cipher")
    .post(cipherControllers.getCipherText);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
module.exports = app
import express from 'express';           // load the express library
const app = express();                   // create an instance of the library

app.get('/hello', (req, res) =>
    res.send('Hello World!'));     // use express library to listen for URL pattern "/hello"

const PORT = 4000;                      // respond with string "Hello World!"
app.listen(PORT);                       // listen to port 4000









const express = require('express');
const app = express();

// to get the request from browser
app.use('/static', express.static('dev'));
app.get('/', (request, response) => {
    response.sendFile('src/index.html', {root: 'dev'})
})

// define a port listing to this app
app.listen(3000, "0.0.0.0", () => { });
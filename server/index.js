const express = require('express');

const port = 3200;

const app = express();

app.get('/test', (req, res) => {
    res.render({data: 'hello from server'})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
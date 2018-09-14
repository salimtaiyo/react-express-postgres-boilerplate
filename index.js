const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/hello', (req,res) => {
    const yo = [{ id:1, name: 'Shalom'}];
    res.json(yo)
});
app.listen(port, () => console.log('The Express App is running in ' + port));
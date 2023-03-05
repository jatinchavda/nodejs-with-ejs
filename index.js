
// Tutorial: https://youtu.be/j8KbjWWHqKU

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended:true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req,res) => {
    const username = 'john';
    //res.send('john');
    res.render('index', { username : username });
    // default views folder
})

app.post('login', (req, res)=> {
    res.send('email');
})

app.listen(port, () => {
    console.log('app listen on ', port);
});
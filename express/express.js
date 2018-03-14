const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('doubleIt', (text) => {
    return text + " " + text;
});

app.use((req, res, next) => {
    console.log(req.method);
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home'
    });
});

app.get('/help', (req, res) => {
    res.render('help.hbs', {
        pageTitle: 'Help'
    });
});

app.listen(3000, () => {
    console.log('Firing up the server on port 3000');
})


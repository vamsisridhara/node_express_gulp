var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bookRouter = require('./src/routes/bookRoutes');

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');
// app.set('view engine','jade');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.get('/', function (req, res) {
    //res.send('index');
    res.render('index', {
        title: 'hello from render',
        nav: [{
            Link: '/Authors', Text: 'Authors'
        }, {
            Link: '/Books', Text: 'Books'
        }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('server running on port: ' + port);
});
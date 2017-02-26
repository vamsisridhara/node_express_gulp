var express = require('express');
var bookRouter = express.Router();
var books = [
    {
        title: 'node js',
        author: 'node'
    }, {
        title: 'mvc',
        author: 'mvc'
    }, {
        title: 'ang2',
        author: 'ang2'
    }, {
        title: 'react js',
        author: 'react'
    }
];
bookRouter.route('/')
    .get(function (req, res) {
        res.render('bookList', {
            title: 'hello from books',
            nav: [{
                Link: '/Authors', Text: 'Authors'
            }, {
                Link: '/Books', Text: 'Books'
            }],
            books: books
        });
    });
bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.param.id;
        res.render('book', {
            title: 'hello from books',
            nav: [{
                Link: '/Authors', Text: 'Authors'
            }, {
                Link: '/Books', Text: 'Books'
            }],
            books: books[id]
        });
    });
module.exports = bookRouter;
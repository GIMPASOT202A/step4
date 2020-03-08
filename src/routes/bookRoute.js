const express = require('express');
const bookRouter = express.Router();

const books = [
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
  {
    title: 'Sample book title here',
    genre: 'Historical fiction',
    author: 'Kwame Oppong',
    read: false,
  },
];
bookRouter.route('/')
  .get((req, res) => {
    res.render(
      'books',
      {
        nav: [{ link: '/books', title: 'Books' },
          { link: '/author', title: 'Authors' }],
        title: 'Library',
        books,
      },
    );
  });
bookRouter.route('/single')
  .get((req, res) => {
    res.send('Single Hello books');
  });

module.exports = bookRouter;
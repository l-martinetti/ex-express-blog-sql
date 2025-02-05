const express = require('express');
const app = express();
const port = 3000;

const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound')

const postsRouter = require('./routers/post')

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server dei post')
});

app.use('/posts', postsRouter);

app.use(errorsHandler);

app.use(notFound);

app.listen(port, (req, res) => {
    console.log(`sono in ascolto alla porta ${port}`);
})

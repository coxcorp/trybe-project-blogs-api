require('dotenv').config();
const express = require('express');
// const routers = require('./routes/router');

const app = express();
app.use(express.json());

app.use('/user');
app.use('/login');
app.use('/categories');
app.use('/post');

app.listen(process.env.PORT, () => console.log(`ouvindo porta ${process.env.PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

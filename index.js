require('dotenv').config();
const express = require('express');
const routers = require('./routes/router');
const error = require('./middlewares/error');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/login', routers.loginRouter);
app.use('/user', routers.userRouter);
app.use('/categories', routers.categoriesRouter);
app.use('/post', routers.postRouter);

app.use(error);

app.listen(port, () => console.log(`ouvindo porta ${port}!`));

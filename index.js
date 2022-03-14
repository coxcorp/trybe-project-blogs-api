require('dotenv').config();
const express = require('express');
const routers = require('./routes/router');
const error = require('./middlewares/error');

const app = express();
app.use(express.json());

app.use('/user', routers.userRouter);
app.use('/login', routers.loginRouter);
app.use('/categories', routers.categoriesRouter);
app.use('/post', routers.postRouter);

app.use(error);

app.listen(process.env.PORT, () => console.log(`ouvindo porta ${process.env.PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

import express from 'express';
import  UsersController from '@controllers/UsersController';

const app = express();

const usersController = new UsersController();

app.get('/',(request, response) =>{
  return response.json({mensage: 'hello word'});
})

app.get('/teste', usersController.teste);


app.listen(3333);
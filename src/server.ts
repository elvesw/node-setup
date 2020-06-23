import express, { Request, Response } from 'express';
import UsersController from '@controllers/UsersController';

const app = express();
const usersController = new UsersController();

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World' });
});

app.get('/teste', usersController.teste);

app.listen(3333);

import express from 'express';

const app = express();

app.get('/',(request, response) =>{

  return response.json({mensage: 'hello word'});
})


app.listen(3333);
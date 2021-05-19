import express from 'express'
import path from 'path'
import template from './src/template'
import ssr from './src/server'

const app = express()

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

app.disable('x-powered-by');

app.listen(3000);

let initialState = {
  tasks: [
    {id: "1", name: 'Petr', surname: 'Petrov', email: 'petr@mail.ru', comment: 'djeijoijeorf'},
    {id: "2", name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru'},
    {id: "3", name: 'Sergei', surname: 'Sergeev', email: 'sergei@mail.ru'},
  ],
}

app.get('*', (req, res) => {
  const { preloadedState, content}  = ssr(initialState, req.url)
  const response = template(preloadedState, content)
  res.send(response);
});
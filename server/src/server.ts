import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// const users = [
//     'André',
//     'Diego',
//     'Marlon',
//     'Teste'
// ];

// app.get('/users', (request, response) => {
//     //console.log('Listagem de usuários');

//     // response.send('Hello World');

//     const search = String(request.query.search);
//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     response.json(filteredUsers);
// });

// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);
//     const user = users[id];
//     return response.json(user);
// });

// app.post('/users', (request, response) => {
//     const data = request.body;
//     console.log(data);

//     const user = {
//         name: data.name,
//         email: data.email
//     };

//     response.json(user);
// });

app.listen(3333);
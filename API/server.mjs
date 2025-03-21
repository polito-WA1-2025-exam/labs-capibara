import express from 'express'
import morgan from 'morgan';
import * as apif from './api_functions.mjs'

const app = express() ;

app.use(express.json())
app.use(morgan('dev'))

// Define routes and web pages
app.get('/', (req, res) =>	res.send('Hello World!')) ;

app.get('/user', (req, res) => {
    let u = { name: 'Fulvio', id:123 }
    res.json(u)
})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.end()
})

app.get('/user/:id/name', (req, res) => {
    const id = req.params.id 

    res.json({"id": id, "name": "Tom"})
})

//Retrieve the list of all items of the main collection.

app.get('/orders', async (req, res) => {
    try {
        const o = await apif.getMainCollection();
        if(o.error) {
          res.status(404).json(o);
        } else {
          res.json(o);
        }
      }
      catch {
        res.status(500).end();
      }

}) ;
let j = apif.getMainCollection()
console.log(j)
// Activate server
app.listen(3000, () =>	console.log('Server	ready')) ;



// app.get('/api/questions/:id', async (request, response) => {
//     try {
//       const question = await getQuestion(request.params.id);
//       if(question.error) {
//         response.status(404).json(question);
//       } else {
//         response.json(question);
//       }
//     }
//     catch {
//       response.status(500).end();
//     }
//   });
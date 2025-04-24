import express from 'express'
import morgan from 'morgan';
import * as apif from './api_functions.mjs'
import * as dbf from '../dbFunctions'
import * as poke from '../poke.mjs'
import { check, validationResult } from 'express-validator';

const app = express() ;

app.use(express.json())
app.use(morgan('dev'))

// Define routes and web pages
app.get('/', (req, res) =>	res.send('Hello World!')) ;

app.get('/user', (req, res) => {
    let u = { name: 'Fulvio', id:123 }
    res.json(u)
})

/*
app.post('/user', (req, res) => {
    console.log(req.body)
    res.end()
})
*/

// insert user into database 
app.post('/user', 
  [
    check('username').isEmail(),
    check('password').isLength({ min: 5 })],
  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { username, password } = req.body;
  let u = new poke.User(username, password);

  dbf.registerUser(u).then(() => {
    res.status(201).send('User registered successfully');
  }).catch((err) => {
    if (err.errno && err.errno == 19) {
      res.status(400).send('User is already registered');
    } else {
      res.status(500).send('Error registering user: ' + err.message);
    }
  });
  res.status(201);
});


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

app.get('/orders/:orderId', async (req, res) => {
  const orderId = req.params.orderId
  try {
    const o = await apif.getOrder(orderId);
    if(o.error) {
      res.status(404).json(o);
    } else {
      res.json(o);
    }
  }
  catch {
    res.status(500).end();
  }
})

// delete an order by Id
app.delete("/orders/:orderId", async (req, res) => {
  const orderId = req.params.orderId;
  if(!orderId){
    res.status(400).send("orderId not specified")
    return;
  }

  const o = dbf.deleteOrderById(orderId);

  if(o.error) {
    res.status(404).send(o);
  } else {
    res.status(200).send("Order deleted correctly");
  }
  
});

app.get('/bowls/size/:size', async (req, res) => {
  const size = req.params.size;
  try {
    const o = await dbf.getBowlsBySize(size);
    if (o.error) {
      res.status(404).json(o);
    } else {
      res.json(o);
    }
  } catch (error) {
    if (error === 'invalid size') { // Check error message for invalid size
      res.status(400).json({ message: 'Invalid size provided', details: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error'});
    }
  }
});




// let j = apif.getMainCollection()
// console.log(j)


// Activate server
app.listen(3000, () =>	console.log('Server	ready')) ;
app.use(express.json());



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
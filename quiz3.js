let dbUsers = [
  {
      username:"haniff",
      password:"123456",
      name:"Haniff",
      email:"b022120044@utem.student.edu.my"
  },
  {
      username:"john",
      password:"password",
      name:"John",
      email:"johncena@"
  },
  {
      username:"ali",
      password:"67890",
      name:"Ali",
      email:"alinabu@"
  }
]



function register(reqUsername,reqPassword,reqName,reqEmail){
  dbUsers.push({
      username: reqUsername,
      password: reqPassword,
      name: reqName,
      email: reqEmail
  })
}

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login',(req,res) => {
  console.log(req.body)

let result = login
(
  req.body.username,
  req.body.password
)
  res.send(result)
})

function login(reqUsername, reqPassword){
  let matchUser = dbUsers.find(
      user => user.username == reqUsername
  )
  if(!matchUser) return "User Not Found"
  if(matchUser.password==reqPassword){
      return matchUser
  }
  else{
      return "invalid password"
  }
}

app.post('/register', (req, res) => {
  let result = register(
    req.body.username,
    req.body.password,
    req.body.name,
    req.body.email
  )
  res.send('result')
})

app.get('/', (req, res) => {
  res.send('Hello UTeM!')
})

app.get('/bye', (req, res) => {
  res.send('Bye Bye UTeM!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
}).post('/', (req, res) => {
    console.log("hey! it is a Post request");
    // res.sendFile('public/myPage.html',{root:__dirname})
    res.send("Post request");
  })

  app.get("/api", (req, res) => {
    console.log("Hey! it is a res.json()");
    
    res.json({a:1,b:2,c:3,d:4,name:["Harry","Jit"]});
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
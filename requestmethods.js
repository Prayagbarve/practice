const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/hello', function (req, res) {
  res.send('________________________________________________________')
})

app.post('/post-sample', function (req, res){
console.log("req.body --", req.body)
res.send('hiii');
}); 
/* 

*/
app.put('/put-sample', function(req, res){
  console.log('Inside /put-sample ---> ')
  console.log("Request body parameters ---> ",req.body)
  console.log('Before sending put-sample response -----------')
  res.send('hi-response-from-put-sample')
})

app.delete('/delete-sample', function(req, res){
  console.log('Inside /put-sample ---> ')
  console.log("Request body parameters ---> ",req.body)
  console.log('Before sending put-sample response -----------')
  res.send('hi-response-from-Delete-sample')
})

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })  

  //ftech data by req.params
  app.get('/users/:userId/books/:bookId', function (req, res) {
    console.log("user ---", req.params.userId, req.params.bookId);
    res.send(req.params)
    console.log("typeof req.params------>",typeof req.params)
     console.log("UserID------>",req.params.userId)
     console.log("typeof UserID------>",typeof req.params.userId)
  })
// fetch data by req.query
   app.get('/users/', function(req,res){
    console.log("user ---", req.query);
     res.send(req.query)
     console.log("typeof req.query------>",typeof req.query)
     console.log("UserID------>",req.query.active)
     
     console.log("typeof UserID------>",typeof req.query.active)
   })

   
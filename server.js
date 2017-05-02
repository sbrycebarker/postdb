var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    request = require('request');



    var app =express()

    app.use(cors());
    app.use(bodyParser.json())
    console.log('hello')



  const db = massive.connectSync({connectionString: 'postgres://postgres:1234a@localhost/testDB'})

  app.post('/send', function(req, res ) {
    db.postdata([req.body.text], function(err, data) {

    })
    })


  app.get('/getData', function(req, res) {
    db.run( 'select * from data' , function(err, response ){
      res.send( response )
    })
  })

  app.delete('/delete/:id', function(req, res ) {
    db.run([req.params.id],'delete from data where text_id = $1', function (err) {
      console.log(err)
    })
  })




  app.use(express.static('./public'))


  var port = 3000

app.listen(port, function() {

  console.log("listining on port " + port)
})

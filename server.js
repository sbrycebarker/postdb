var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors')


    var app =express()

    app.use(cors());
    app.use(bodyParser.json())
    console.log('hello')



  const db = massive.connectSync({connectionString: 'postgres://postgres:1234a@localhost/testDB'})

  app.post('/send:text', function(req, res ) {

    db.(){
    console.log(data)
}
  })

  app.use(express.static('./public'))


  var port = 3000

app.listen(port, function() {

  console.log("listining on port " + port)
})

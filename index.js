var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }
  var data = JSON.parse(data.body)
  //render the name
  var uppercase = data.name.toUpperCase()
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: uppercase})


})
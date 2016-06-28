var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var satellites = require('./views/satellites.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function(err, data) {
  if (err) {
    console.error(err)
  }
  var data = JSON.parse(data.body)
  console.log(data, 'this is the data')
  //render the name on greeting hbs
  var uppercase = data.name.toUpperCase()
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: uppercase})
  //render data on satellites
  var addInfo = document.getElementsByTagName('button')[0]
  var coords = document.getElementById('coords')
  addInfo.addEventListener("click", function() {
    coords.innerHTML = satellites(data)
  })
})
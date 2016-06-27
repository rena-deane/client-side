var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  var data = data.body[0]
  // In case you're curious
  console.log(typeof data.body, 'data body') // FYI: data.body is a string
  console.log(typeof data, 'data body first entry') // FYI: data.body is a string
  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: data})
})

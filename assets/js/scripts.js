var request = new XMLHttpRequest()

request.open('POST', 'http://api.forismatic.com/api/1.0/', method=getQuote&key=457653&format=xml&lang=en)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
     {
      console.log(data.quoteAuthor)
    }
  } else {
    console.log('error')
  }
}

request.send()

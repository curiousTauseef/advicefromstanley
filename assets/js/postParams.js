var data = new FormData();
data.append('method', 'getQuote');
data.append('key', '457653');
data.append('format', 'json');
data.append('lang', 'en');

var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://api.forismatic.com/api/1.0/', true);
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};
xhr.send(data);

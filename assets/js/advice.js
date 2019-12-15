function changeText(text) {

  document.getElementById('chgtext').innerHTML = text;

}

		function parseQuote(response)
		{
			document.getElementById("quote").innerHTML = response.quoteText;
			document.getElementById("author").innerHTML = response.quoteAuthor;
		}

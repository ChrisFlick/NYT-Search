// API request
let searchedForText = '';

let queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=${APIKey}`;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(element) {
  console.log(element);
});
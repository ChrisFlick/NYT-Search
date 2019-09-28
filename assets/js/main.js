$(document).ready( function() {
  $('#search-button').on('click', function() {
    let articles = getArticles($('#search-terms').val(), $('#start-year').val(), $('#end-year').val())
    let resultNum = $('#result-number').val()

    articles.then(function(response) {
      console.log(response)
      

      for (let i = 0; i < resultNum; i++) {
        let article = response.response.docs[i]

        let $row = $('<div>')
        let $col1 = $('<div>')
        let $col2 = $('<div>')
        let $img = $('<img>')
        let $abstract = $('<p>')
        let $link = $('<a>')
        let $headline = $('<h3>')

        $link.attr('href', article.web_url)
        $link.attr('target', '_blank');

        $headline.text(article.headline.main)
        $abstract.text(article.abstract)

        $row.append($link);

        $link.append($headline);
        $link.append($col1);
        $link.append($col2);

        $col1.append($img);
        $col2.append($abstract);

        $('#search-results').append($row)
      }
    });
  });
  
  $('#clear-button').on('click', function() { // Clear the page when the clear button is selected
    $('#search-term').val("")
    $('#result-number').val("1")
    $('#start-year').val("")
    $('#end-year').val("")
  })
});
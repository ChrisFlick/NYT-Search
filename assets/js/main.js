$(document).ready( function() {
  $('#search-button').on('click', function() {
    let articles = getArticles($('#search-term').val(), $('#start-year').val(), $('#end-year').val())
    let resultNum = $('#result-number').val()

    articles.then(function(response) {
      console.log(response)
      

      for (let i = 0; i < resultNum; i++) {
        let article = response.response.docs[i]

        let $row1 = $('<div>')
        let $row2 = $('<div>')
        let $col1 = $('<div>')
        let $col2 = $('<div>')
        let $img = $('<img>')
        let $abstract = $('<a>')
        let $headline = $('<h3>')
        let $break = $('<br>')

        $headline.append($break);
        $headline.text(article.headline.main)
        $headline.append($break); // Ensure picture is on next line


        $img.attr('src', 'https://www.nytimes.com/' + article.multimedia[0].url)
        $img.css('height', "150px")

        $row1.attr('class', 'row')
        $row2.attr('class', 'row')
        $col1.attr('class', 'col-md-6')
        $col2.attr('class', 'col-md-6')

        $abstract.text(article.abstract)
        $abstract.attr('href', article.web_url)
        $abstract.attr('target', '_blank');

        $row1.append($headline)
        $row2.append($col1);
        $row2.append($col2);

        $col1.append($img);
        $col2.append($abstract);

        $('#search-results').prepend($row2)
        $('#search-results').prepend($row1)
      }
    });
  });
  
  $('#clear-button').on('click', function() { // Clear the page when the clear button is selected
    $('#search-term').val("")
    $('#result-number').val("1")
    $('#start-year').val("")
    $('#end-year').val("")
    $('#search-results').html('')
  })
});
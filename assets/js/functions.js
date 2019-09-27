getArticles("", "20070101", "20081228");

function getArticles (terms, startYear, endYear){

    let queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&begin_date=${startYear}&end_date=${endYear}&api-key=${APIKey}`;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(element) {
        console.log(element)
    }) 
}
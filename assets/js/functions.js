// getArticles("", "20070101", "20081228");

function getArticles (terms, startYear, endYear){
    let beginDate = startYear + '0101'
    let endDate = endYear + "1228"
    let queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&begin_date=${beginDate}&end_date=${endDate}&api-key=${APIKey}`;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(element) {
        console.log(element)
    }) 
}
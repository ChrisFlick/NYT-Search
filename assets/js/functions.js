getArticles("deadmau5", "", "");

function getArticles (terms, startYear, endYear){

    let queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}?end_date=${endYear}?begin_date=${startYear}&api-key=${APIKey}`;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(element) {
        console.log(element)
    }) 
}
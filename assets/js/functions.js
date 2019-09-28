function getArticles (terms, startYear, endYear){
    let beginDate = startYear + '0101'
    let endDate = endYear + "1228"
   
    let queryURL;

    if (startYear && endYear) {
        queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&begin_date=${beginDate}&end_date=${endDate}&api-key=${APIKey}`;
    } else if (startYear) {
        queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&begin_date=${beginDate}&api-key=${APIKey}`;
    } else if (endYear) {
        queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&end_date=${endDate}&api-key=${APIKey}`;
    } else {
       queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&api-key=${APIKey}`;
    }

    return $.ajax({
        url: queryURL,
        method: "GET",
    })
}
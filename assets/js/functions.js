 function getArticles (terms, startYear, endYear){
    // Make sure month and day is included otherwise ajax request will com back with an error
    let beginDate = startYear + '0101' 
    let endDate = endYear + "1228"
   
    let queryURL;

    if (startYear && endYear) { // If both the end year and start year are provided include them in search results
        queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&begin_date=${beginDate}&end_date=${endDate}&api-key=${APIKey}`;
    } else if (startYear) { // If only start year is provided include it in search results
        queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&begin_date=${beginDate}&api-key=${APIKey}`;
    } else if (endYear) { // If only end year is provided include it in search results
        queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&end_date=${endDate}&api-key=${APIKey}`;
    } else { // If only the terms are provided only include terms..
       queryURL = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${terms}&api-key=${APIKey}`;
    }

    return $.ajax({
        url: queryURL,
        method: "GET",
    })
}
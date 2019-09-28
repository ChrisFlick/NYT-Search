$(document).ready( function() {
  $('#clear-button').on('click', function() {
    $('#search-term').val("")
    $('#result-number').val("1")
    $('#start-year').val("")
    $('#end-year').val("")
  })
});
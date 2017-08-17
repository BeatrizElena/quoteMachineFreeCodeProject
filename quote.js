$(document).ready(function(){
  $("#getQuote").click(function(){
    var url = "https://random-quote-generator.herokuapp.com/api/quotes/random"
    $.ajax({
      url: url,
      success: function(quote){
        $("#quote-content").html(quote.quote);
        $("#quote-author").html(quote.author);
    }});
  });
});


topics = ['Future', 'Migos Rap', 'Weeknd', 'Bryson Tiller', 'Drake'];
  

function addButtons()
{

  for (var i=0; i < topics.length; i++)
  {
    var newElement = $("<button>");
    newElement.addClass("artistButtons");
    newElement.text(topics[i]);
    //newElement.attr("class", "btn btn-info");
    newElement.attr("data-artist", topics[i]);
    newElement.click(getGiphyForArtist);
    $("#artistButtons").prepend(newElement);
  }
}

$('#artist-form').submit(function() {
   
    var $inputs = $('#artist-form :input');
    //alert("user choice is" + JSON.stringify($inputs));
    topics.push($('#artist-input').val());

    alert(topics);

    addButtons();

});

function stopAndStartAnimation()
{
  var state = $(this).attr("data-state");


  if (state === 'still') {

      $(this).attr('src', $(this).attr("data-animate"));
      $(this).attr('data-state', 'animate');

  }


  else{

      $(this).attr('src', $(this).attr("data-still"));
      $(this).attr('data-state', 'still');
  }
}

function getGiphyForArtist()
{
  //alert($(this).attr("data-artist") + " is clicked");
        var person = $(this).attr("data-artist");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < 10; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height_still.url);
            personImage.attr("data-state", "still");
            personImage.attr("data-still", results[i].images.fixed_height_still.url);
            personImage.attr("data-animate", results[i].images.fixed_height.url);
            personImage.click(stopAndStartAnimation);
            //personImage.addClass("gif")

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#animate").prepend(gifDiv);
          }
        });
}

$(document).ready(function(){

  //var art = $("<p class='btn' data-artist='Future'>Future></p>");
  //var art = $("<button class='btn' data-artist='Future'>'Future'></button>");
  //  $("#artistButtons").prepend(art);
  addButtons();

});

/*
var newButton = $("<button class='btn btn-info' data-person='" + value + "'>" + value + "</button>").on("click", function() {
          var person = $(this).attr("data-artist ");
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            artists + "&api_key=dc6zaTOxFJmzC&limit=10";
*/

/*$("button").on("click", function() {
      alert ("Click recieved");
      var person = $(this).attr("data-artist");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#animate").prepend(gifDiv);
          }
        });
    });
    */

    $(".gif").on("click", function() {

      var state = $(this).attr("data-state");


        if (state === 'still') {

            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');

        }


        else{

            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
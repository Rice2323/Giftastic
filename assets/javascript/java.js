

var movies = ["Harry Potter", "Lord of The Rings", "Inception"];

function displayGif() {

var movie = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + movie + "&rating=g";






$.ajax({
    url: queryURL,
    method: "GET"
}) .then(function(response){

        var movieDiv = $("#gifSection");

        var gifRating = response.data.rating;

        var pRating = $("<p>").text("Rating: " + gifRating);
        
        

       var imageURL = response.data.image_original_url;

       var movieImage = $("<img>").attr("src", imageURL);

       movieImage.attr("src", imageURL);

       $("#gifSection").append(movieImage);

       movieDiv.append(pRating);
       console.log(gifRating);


    })

}
function renderButtons(){

$("#buttons-section").empty();

for (var i = 0; i < movies.length; i++){

var abutton = $("<button>");

abutton.addClass("movie-btn");

abutton.attr("data-name", movies[i]);

abutton.text(movies[i]);

$("#buttons-section").append(abutton);

}

}

$("#add-movie").on("click", function(event){

event.preventDefault();

var xMovie = $("#movie-input").val().trim();

movies.push(xMovie);

renderButtons();


});

$(document).on("click", ".movie-btn", displayGif);

renderButtons();


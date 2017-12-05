$(document ).ready(function(){

	var foodList = [];


function foodDisplay() {
var userFood = $("#food-input").val();		// had to include user's response in search
$.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" + userFood + "&api_key=Hoj2gICqMvbl7IYI8j8nNdHz8Or5bbde&limit=10&rating=g",
      method: "GET"
    }).done(function(response) {
      console.log(response);



    	}); // end of ajax call
} // end of foodDisplay
 
//click even to push user input into array
$("#find-food").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the user's response from the input box
       
        //adding user input to array
        foodList.push(userFood);
        renderButtons();

    });


	  function renderButtons() {

        // Deleting the buttons prior to adding new foods
        // (this is necessary otherwise you will have repeat buttons)
        $("food-view").empty();

        // Looping through the array of foods
        for (var i = 0; i < foodList.length; i++) {

          // Then dynamicaly generating buttons for each food in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of food to our button
          a.addClass("foods");
          // Adding a data-attribute
          a.attr("search", foodList[i]);
          // Providing the initial button text
          a.text(foodList[i]);
          // Adding the button to the buttons-view div
          $("food-view").append(a);
        }
      }


}); //end of document ready


  

	
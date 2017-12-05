$(document ).ready(function(){

	$("#find-food").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the user's response from the input box
        var userFood = $("#food-input").val();

        							// had to include user's response in search
$.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" + userFood + "&api_key=Hoj2gICqMvbl7IYI8j8nNdHz8Or5bbde&limit=10&rating=g",
      method: "GET"
    }).done(function(response) {
      console.log(response);

    	}); // end of ajax call



	}); // end of onclick function


}); //end of document ready


  



	
$(document ).ready(function(){

	var foodList = [];


function foodDisplay() {
 var userFood = $(this).data("search");	
 					// had to include user's response in search
$.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" + userFood + "&api_key=Hoj2gICqMvbl7IYI8j8nNdHz8Or5bbde&limit=10&rating=g",
      method: "GET"
    }).done(function(response) {
      console.log(response);
      var foodData = response.data;

      for (var i = 0; i < foodData.length; i++) {
      	// created divs for each loop
      	var foodDiv = $("<div>");
      	//creating an image
      	var foodImage = $("<img>");

      	//assigning the attr & class for each image
      	foodImage.addClass("foodItem");
      	foodImage.attr("data-animate")
      	//appending gif to div
      	foodDiv.append(foodImage);
      	//appending gif to food-view
      	$("#food-view").append(foodDiv);

      }





    	}); // end of ajax call
} // end of foodDisplay



	 


}); //end of document ready


  

	
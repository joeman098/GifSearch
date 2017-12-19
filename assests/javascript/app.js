
//O0kOjvxffoayK3LFafkmLsh3Ftc3ClqP

var topics = ["LOL","Rage","Crying","Face palm", "SMH", "WTF","Why","run"]
var query 
var rating = "";
var limit 
var output 
var limitdisplay 



///



function apicall(){
	var url = "https://api.giphy.com/v1/gifs/search";
	url += '?' + $.param({ 
		'api_key':"O0kOjvxffoayK3LFafkmLsh3Ftc3ClqP",
		"q": query,
		"limit": limit,
		"rating": rating,
	})


	$.ajax({
		url: url,
		method: "GET",
	
}).done(function(response) {
  console.log(response);
  $("#resultContainer").empty();



  for(i=0; response.data.length > i ; i++ ){
  	  var newImage = $("<img>");
  	  var newDiv = $("<div>").text("Rating: " + response.data[i].rating);
  	  newDiv.addClass("box")
  	  newDiv.addClass("card")
  	  newImage.attr("src",response.data[i].images.fixed_width_still.url);
  	  newImage.attr("still",response.data[i].images.fixed_width_still.url);
  	  newImage.attr("animated",response.data[i].images.fixed_width.url);
  	  newImage.attr("state","still");
  	  newImage.addClass("gifs");
  	  newDiv.append(newImage);
  	// $("#resultContainer").append(newDiv);
  	$("#resultContainer").append(newDiv);

};


});
};

$(document).ready(function(){

	$("#limitInput").on("input" ,function(){
		limit = $("#limitInput").val();
		$("#limitDisplay").text(limit);
	});

	
	for (var i = 0; topics.length > i ; i++){
	var newButton1 = $("<button>");
	newButton1.addClass("btn");
	newButton1.addClass("btn-info");
	newButton1.attr("data-name",topics[i]);
	newButton1.text(topics[i]);
	$("#historyContainer").append(newButton1);
};

	$("#searchContainer").on("submit", function(event){
		event.preventDefault();
		query = $("#searchinput").val().trim();
		rating = $("#ratinginput").val().trim();
		limit = $("#limitInput").val();
		$("#searchinput").val("");
		
		apicall();
		buttonRender();


	});
	$(document).on("click",".btn", function(){
		query = $(this).attr("data-name")
		rating = $("#ratinginput").val().trim();
		limit = $("#limitInput").val();
		console.log(query);
		apicall();
	});


	$(document).on("click",".gifs",function(){
		var state = $(this).attr("state")
		var src = $(this).attr("src");
		var animated = $(this).attr("animated");
		var still = $(this).attr("still");
		if( state === "still"){
			$(this).attr("src" , animated)
			$(this).attr("state","animated")

		}
		else{
			$(this).attr("src" , still)
			$(this).attr("state","still")
		}

	});


		});
function buttonRender(){
	var newButton = $("<button>");
	newButton.addClass("btn");
	newButton.addClass("btn-info");
	newButton.attr("data-name",query);
	newButton.text(query);
	console.log(query);
	$("#historyContainer").append(newButton);


};












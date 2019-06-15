$(document).ready(function(){

	$.getJSON( "http://localhost:8080/api/cars", function( data ) {
	  var items = [];
	  $.each( data, function(i,car) {
	  	items.push("<div class='card-deck mb-3 text-center'>"+
          "<div class='card mb-4 lg-4 box-shadow'>"+
            "<div class='card-header'>"+
              "<h4 class='my-0 font-weight-normal'>"+car.brand+"</h4>"+
            "</div>"+
            "<div class='card-body'>"+
              "<h1 class='card-title pricing-card-title'>"+car.model +"</h1>"+
              "<button type='button' class='btn btn-lg btn-block btn-outline-primary'>purchase</button>"+
            "</div>"+
          "</div>"+
         "</div>")
      });
	 
	  $( items.join( "" )).appendTo( "#car-container" );
	});

});
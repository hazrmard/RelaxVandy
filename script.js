$(document).ready(function() {
	console.log("ready!");
	 $.ajax({
        type: "GET",
        url: "/tips.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
	
});

function processData(allText) {
	var allTextLines = allText.split(/\r\n|\n/);
	console.log(allTextLines);
}
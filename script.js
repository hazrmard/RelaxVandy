$(document).ready(function() {
	console.log("ready!");
	getTextFile("http://hazrmard.github.io/RelaxVandy/tips.txt");
	
});

//get txt file
function getTextFile(path) {
	 // loading local text file containing data
	 $.ajax({
        type: "GET",
        url: path,
        dataType: "text",
        success: function(data) {processData(data);}
     });
};

//split raw data into array of lines
function processData(allText) {
	var allTextLines = allText.split(/\r\n|\n/);
	allTextLines = filterList(allTextLines, "");
	console.log(allTextLines);
};

//filter out undesired strings e.g. empty lines
function filterList(data, what) {
	return data.filter(function(element) {
		return element !==what;
	});
};
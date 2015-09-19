$(document).ready(function() {
	console.log("ready!");
	//getTextFile("http://hazrmard.github.io/RelaxVandy/tips.txt");
	var spreadsheet_key = "13zfutqM4RMt5oHHOCsqXmEUjPv3dING-1SRRaNn-Td8"
	getGoogleSheet(spreadsheet_key);
});

function getGoogleSheet(key) {
	Tabletop.init({
		key: key,
		callback: processSheet,
		simpleSheet: true});
};

function processSheet(data, tabletop) {
	console.log("Data acquired!");
	console.log(data);
}

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
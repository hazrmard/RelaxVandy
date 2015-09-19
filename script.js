//setting up source data location
var spreadsheet_key = "13zfutqM4RMt5oHHOCsqXmEUjPv3dING-1SRRaNn-Td8"
var data;

$(document).ready(function() {
	console.log("ready!");
	getGoogleSheet(spreadsheet_key);
	getElementHandles();
	$button.click(function() {console.log("Clicked!"); loadNextTip(data);});
});

function getElementHandles() {
	$button = $("#button-div");
	$text = $("#text-div");
};

//uses Tabletop.js to extract sheet data
function getGoogleSheet(key) {
	Tabletop.init({
		key: key,
		callback: processSheet,
		simpleSheet: true});
};

//filtering out records that have expired
function processSheet(d, tabletop) {
	console.log("Data acquired!");
	console.log(d);
	var d = $.grep(d, function(element, index) {
		return ((new Date(element["Expiration"])).getTime() >= Date.now()) || (element["Expires"] == "FALSE");
	});
	console.log(d);
	data = d;
	$button.click()
};

//converting markdown to HTML and rendering it on screen randomly
function loadNextTip(d) {
	console.log("Loading next line:");
	var randline = d[Math.floor(Math.random() * d.length)]["Tip"];
	randline = markdown.toHTML(randline);
	console.log(randline);
	$text.empty().append(randline);
};

//filter out undesired strings e.g. empty lines
function filterList(data, what) {
	return data.filter(function(element) {
		return element !==what;
	});
};
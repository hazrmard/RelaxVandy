//setting up source data location
var spreadsheet_key = "13zfutqM4RMt5oHHOCsqXmEUjPv3dING-1SRRaNn-Td8";
var main_content = "Tip";
var expiration = "Expiration";
var data;

$(document).ready(function() {
	console.log("ready!");
	getGoogleSheet(spreadsheet_key);
	getElementHandles();
	$button.click(function() {console.log("Clicked!"); loadNextTip(data);});
	$body.keyup(function(event) {console.log("Key Pressed!"); handleKeyPress(event);});
});

function getElementHandles() {
	$button = $("#button-div");
	$text = $("#text-div");
	$body = $("body");
};

function handleKeyPress(event) {
	if (event.which == 39 || event.which == 13) {
		event.preventDefault();
		$button.click();
	};
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
		return ((new Date(element[expiration])).getTime() >= Date.now()) || element[expiration] == "";
	});
	console.log("Filtered:");
	console.log(d);
	data = d;
	$button.click()
};

//converting markdown to HTML and rendering it on screen randomly
function loadNextTip(d) {
	console.log("Loading next line:");
	var x = Math.floor(Math.random() * d.length);
	var randline = d[x][main_content];
	randline = markdown.toHTML(randline);
	$text.empty().append(randline);
};

//filter out undesired strings e.g. empty lines
function filterList(data, what) {
	return data.filter(function(element) {
		return element !==what;
	});
};
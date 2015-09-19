#VandySays
A simple web app that reads a Google Sheet and displays entries randomly. [Short URL](http://tiny.cc/VandySays).

##About
I and another Resident Advisor @ Vanderbilt launched an initiative for providing tips on well-being to residents in our charge. We initially created an infographic for digital distribution. I took the concept and developed it into this project. There are 2 parts: the front end - [the site you see](http://hazrmard.github.io/VandySays); and the back-ish end: a Google Form feeding data into a Google Sheet with some data validation built in. 

Resident Advisors (or faculty etc.) can put in notes about events happening, or general advice into the form. They can also specify expiration dates for their entries. The site then pulls the data, filters out expired records, and serves them - one at a time - to the end user.

##Make it your own
You can fork this repository and link your very own google form to it. To pull in your data, you need to:
* [Publish your Google Sheet](https://support.google.com/docs/answer/37579?hl=en) and [obtain the Key](http://www.coolheadtech.com/blog/use-data-from-other-google-spreadsheets) from the published link.
* Set up a Google Form to for data entry a [new](https://support.google.com/docs/answer/87809?hl=en) or [existing](https://support.google.com/docs/answer/2917686?hl=en) spread sheet.
* Set up the JavaScript variables referencing your sheet/columns in `script.js`:
```javascript
var spreadsheet_key = "YOUR SPREADSHEET KEY";
var main_content = "NAME OF MAIN CONTENT COLUMN";
var expiration = "NAME OF EXPIRATION DATE COLUMN";
```
* Make any changes you like to `style.css` and `index.html`. The `#button-div` and `#text-div` elements are referenced by the script in `script.js`.

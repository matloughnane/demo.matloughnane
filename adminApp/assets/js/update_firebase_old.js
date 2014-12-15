
// The link for the arrays
// https://amber-fire-55.firebaseio.com/timetable/summer_da/weekday

var season1 = "Summer (May to August)";
var season2 = "Winter (September to April)";

var journey1 = "Departing Arranmore";
var journey2 = "Departing Burtonport";

var days1 = "Monday to Saturday";
var days2 = "Sunday";

var x1 = "SummerSec1";
var x2 = "SummerSec2";
var x3 = "SummerSec3";
var x4 = "SummerSec4";

var x5 = "WinterSec1";
var x6 = "WinterSec2";
var x7 = "WinterSec3";
var x8 = "WinterSec4";

$(function() {

	var firebaseRef = new Firebase("https://amber-fire-55.firebaseio.com/");

	// var firebaseRef2 = new Firebase("https://amber-fire-55.firebaseio.com/timetable/summer_da/weekday");

	// ==================================================================================

	// AN ARRAY FOR SUMMER WEEKDAY
    var timetableSummerWeekdayRef = firebaseRef.child("timetable/summer_da/weekday");

	// Use the timetable summer weekday
	timetableSummerWeekdayRef.on("value", function(snapshot) {
		var summerDaWArray = [];
		summerDaWArray = snapshot.val();
		console.log(summerDaWArray);

		var summerDaWTitle = "Monday to Friday";
		var tableSec_sumDaW = timetableSection(summerDaWArray, summerDaWTitle);

		// TESTING  ---- INSERTING ARRAY INTO HTML ----- TESTING
			// document.getElementById("summerTimetableArray").innerHTML = summerDaWArray;
			// document.getElementById("summerTimetableArrayZero").innerHTML = summerDaWArray[0];
		// INSERTING ARRAY INTO TABLE
			document.getElementById("z_summerTableConstruct").innerHTML = tableSec_sumDaW;

	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});


	// ============ CONTRUCTING THE SUMMER TABLES =======================

	// SUMMER DEPARTING ARRANMORE
	var timetableSummerWeekdayDARef = firebaseRef.child("timetable/summer_da/weekday");
	var timetableSummerWeekendDARef = firebaseRef.child("timetable/summer_da/weekend");

	// CALL THE CONSTRUCTORS
	sectionConstructor(timetableSummerWeekdayDARef, journey1, days1, x1);
	sectionConstructor(timetableSummerWeekendDARef, journey1, days2, x2);

	// SUMMER DEPARTING BURTONPORT
	var timetableSummerWeekdayDBRef = firebaseRef.child("timetable/summer_db/weekday");
	var timetableSummerWeekendDBRef = firebaseRef.child("timetable/summer_db/weekend");
	
	// CALL THE CONSTRUCTORS
	sectionConstructor(timetableSummerWeekdayDBRef, journey2, days1, x3);
	sectionConstructor(timetableSummerWeekendDBRef, journey2, days2, x4);

	// ============ CONTRUCTING THE WINTER TABLES =======================

		// SUMMER DEPARTING ARRANMORE
	var timetableWinterWeekdayDARef = firebaseRef.child("timetable/winter_da/weekday");
	var timetableWinterWeekendDARef = firebaseRef.child("timetable/winter_da/weekend");

	// CALL THE CONSTRUCTORS
	sectionConstructor(timetableWinterWeekdayDARef, journey1, days1, x5);
	sectionConstructor(timetableWinterWeekdayDARef, journey1, days2, x6);

	// SUMMER DEPARTING BURTONPORT
	var timetableWinterWeekdayDBRef = firebaseRef.child("timetable/winter_db/weekday");
	var timetableWinterWeekendDBRef = firebaseRef.child("timetable/winter_db/weekend");
	
	// CALL THE CONSTRUCTORS
	sectionConstructor(timetableWinterWeekdayDBRef, journey2, days1, x7);
	sectionConstructor(timetableWinterWeekendDBRef, journey2, days2, x8);


});

// CREATE GENERAL TABLE FUNCTION

// INPUTS
// FIREBASE reference
// Type of Journey
// The type of day
// needs to export a table section with three rows season, day and times
// Season to change the colour


function sectionConstructor(firebaseArrayRef, journeyType, dayType, htmlID) {

	firebaseArrayRef.on("value", function(snapshot) {
		// Get's the array in the correct format and logs it
		var timesArray = [];
		timesArray = snapshot.val();
		// console.log(timesArray);

		// Construct the table
		var tableCons = timetableConstructor(timesArray, journeyType, dayType);

		// Put the table in the HTML
		document.getElementById( ""+ htmlID +"" ).innerHTML = tableCons;

	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});

}


function timetableConstructor(myArray, journeyTitle1, daysTitle1) {

	if (daysTitle1 == days1) {
		// Create the heading
    	var result = "<tr> <th colspan=" + myArray.length + "> " + journeyTitle1 + "</th> </tr>";
    	// Create the weekday timetable
	} else {
		var result = "";
	}
    result += "<tr> <td colspan=" + myArray.length + ">" + daysTitle1 + "</td> </tr> <tr>";
    for(var i=0; i < myArray.length; i++) {
            result += "<td>" + myArray[i] + "</td>";
    }
    result += "</td>";    

    result += "</td>";
    // Create the weekend timetable


    return result;
}


// CREATE TABLE SECTION FUNCTION
// http://stackoverflow.com/questions/15164655/generate-html-table-from-2d-javascript-array

function timetableSection(myArray, secTitle) {
// <table border=1>
    var result = "<tr>";
    result += "<td colspan=" + myArray.length + ">" + secTitle + "</td> </tr> <tr>";
    for(var i=0; i < myArray.length; i++) {
            result += "<td>" + myArray[i] + "</td>";
    }
    result += "</td> </td>";
    // result += "</table>";

    return result;
}




// New Firebase Form JS

$(function() {

    var url = "https://amber-fire-55.firebaseio.com/";
    var firebaseRef = new Firebase(url);

   // A MESSAGES REFERENCE UNDER MAIN DB
    var allMessagesRef = firebaseRef.child("messages");

    // READING THE WHOLE LIST OF DATA
	allMessagesRef.on('value', function (snapshot){
    
	    var allMessages = snapshot.val();
	    // log the whole document
	    $("#totalDocumentRead").html(JSON.stringify(snapshot.val()));

	});

});
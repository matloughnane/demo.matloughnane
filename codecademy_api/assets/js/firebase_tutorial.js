// comment

$(function() {
// Call firebaseRef.set here!
    var url = "https://amber-fire-55.firebaseio.com/";
    var firebaseRef = new Firebase(url);
    // SETTING SOME DATA
    firebaseRef.set({
    	type: "Phone",
    	name: "Nexus",
    	price: 269.00
    });
    // READING SOME DATA
    firebaseRef.on("value", function(snap){
    	$("#result").html(JSON.stringify(snap.val()));
    })
});
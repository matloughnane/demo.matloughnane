// comment

$(function() {

    var url = "https://amber-fire-55.firebaseio.com/";
    var firebaseRef = new Firebase(url);

    // A MESSAGES REFERENCE UNDER MAIN DB
    var messagesRef = firebaseRef.child("messages");

        // ============================================================================================================    

        function funct1(evt) {
            // Assigns form data to variables
            var name = document.getElementById('name').value;
            var message = document.getElementById('message').value;
            // Takes the date for reference
            var date = Date();
            
            // Console Log for Testing
            // console.log('Setting '+name+' '+message+' '+date);
            
            // PUSHES DATA TO A UNIQUE PART OF DB
            messagesRef.push({Name: name, Message: message, Date: date});
            evt.preventDefault();
        }

        // ============================================================================================================

        // Assign the submit variable to the button
        var submit = document.getElementById('MessageButton');

        // Submit Button - 
        submit.onclick = funct1;

        // ============================================================================================================

        // READING THE DATA
        messagesRef.on('child_added', function (snapshot){
            // ASSIGN SNAPSHOT TO A VARIABLE
            var newMessage = snapshot.val();
            // LOGS TO CONSOLE
                console.log(snapshot.val());
            // WRITES WHOLE DOCUMENT OUT INTO A DIV
                $("#documentRead").html(JSON.stringify(snapshot.val()));
            // CONSOLE LOG SPECIFIC POSTS
            // console.log("Name: " + newMessage.Name);
            // console.log("Message: " + newMessage.Message);

        }, function (errorObject) {
            // CONSOLE LOGS AN ERROR
          console.log('The read failed: ' + errorObject.code);
        });

});
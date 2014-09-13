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

        // READING THE LATEST DATA
        messagesRef.on('child_added', function (snapshot){
            // ASSIGN SNAPSHOT TO A VARIABLE
            var newMessage = snapshot.val();
            // LOGS TO CONSOLE THE ENTIRE DOCUMENT
                // console.log(snapshot.val());
            // WRITES WHOLE DOCUMENT OUT INTO A DIV
                $("#documentRead").html(JSON.stringify(snapshot.val()));
            // CONSOLE LOG SPECIFIC POSTS
            console.log("Name: " + newMessage.Name);
            console.log("Message: " + newMessage.Message);
            // Display on the HTML
                $(".nameDiv").html("Name: "+ newMessage.Name);
                $(".messageDiv").html("Message: "+ newMessage.Message);
        }, function (errorObject) {
            // CONSOLE LOGS AN ERROR
          console.log('The read failed: ' + errorObject.code);
        });

           // A MESSAGES REFERENCE UNDER MAIN DB
        var allMessagesRef = firebaseRef.child("messages");

        // READING THE WHOLE LIST OF DATA
        allMessagesRef.on('value', function (snapshot){
        
            var allMessages = snapshot.val();
            // log the whole document
            $("#totalDocumentRead").html(JSON.stringify(snapshot.val()));

            // GET THE NUMBER OF MESSAGE AVAILABLE
            var allMessagesLength = Object.keys(allMessages).length;

            console.log("Testing " + allMessagesLength);

            for( i = 0; i < allMessagesLength; i++){
                console.log("Matthew")

                // BROKEN TECHNIQUE
                // $(".nameLoop").html("Name: "+ allMessages.Name);
                // $(".messageLoop").html("Message: "+ allMessages.Message);
            };

        });


});
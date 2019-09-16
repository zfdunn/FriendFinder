// ----------------------------------------------------------
// create on click event for submit button that does ajax to the server

$("#submit").on("click", function(){
    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        score: [$("#q1").val(), 
                $("#q2").val(), 
                $("#q3").val(),  
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val(),
        ]};
    
    $.post("/api/friends"), userData, function(data){
        console.log("Data: " + JSON.stringify(data));
    };

});
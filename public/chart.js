

// document.getElementById("unit") = "pppppppppp";

// document.getElementById("unit_").innerHTML = "ngParagraph chaedasv!";

firebase.database().ref("unit").once('value').then(function(dataSnapshot){
    document.getElementById("unit1").innerHTML = dataSnapshot.val();       
});
firebase.database().ref("temp").once('value').then(function(dataSnapshot){
    document.getElementById("temp1").innerHTML = dataSnapshot.val();       
});
firebase.database().ref("humid").once('value').then(function(dataSnapshot){
    document.getElementById("humid1").innerHTML = dataSnapshot.val();       
});
firebase.database().ref("flag").once('value').then(function(dataSnapshot){
    document.getElementById("flag1").innerHTML = dataSnapshot.val();       
});


// document.getElementById("unit_").innerHTML = unit;


function myclick3() {

    
    // document.getElementById("unit") = "sss";

    
    var x = document.getElementById("unit1");   // Get the element with id="demo"
    x.style.color = "red"; 
    
    // document.getElementById('unit').innerHTML="saaaaa";;
   
    


    
}
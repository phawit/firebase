var unit = document.getElementById("unit");
var ssid = document.getElementById("ssid");
var pass = document.getElementById("pass");
var line = document.getElementById("line");
var line2 = document.getElementById("line2");

var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var head = document.getElementById("head");

var head = document.getElementById("username");
var head = document.getElementById("password");

// document.getElementById("unit1").value = "xxxxxxxxxx";

// firebase.database().ref("pub").once('value').then(function(dataSnapshot){
    // console.log(dataSnapshot.val());
    // document.getElementById("button").innerHTML = dataSnapshot.val();       
// });


myclick2();

function myclick() {
    var unit_val = unit.value;
    var ssid_val = ssid.value;
    var pass_val = pass.value;
    var line_val = line.value;
    var line2_val = line2.value;

    window.alert("update success");
    var firebaseRef = firebase.database().ref();

    //firebaseRef.set(val);
    //firebaseRef.child(val).set("ssssss");

    //firebaseRef.set("xx");
    firebaseRef.child(unit_val+"/unit").set(unit_val);
    firebaseRef.child(unit_val+"/ssid1").set(ssid_val);
    firebaseRef.child(unit_val+"/pass1").set(pass_val);
    firebaseRef.child(unit_val+"/line").set(line_val);
    firebaseRef.child(unit_val+"/line2").set(line2_val);
    firebaseRef.child(unit_val+"/pub").set(1);
       
}

function myclick1() {
    document.getElementById("unit").value = "";
    document.getElementById("ssid").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("line").value = "";
    document.getElementById("line2").value = "";
    


    
}

function myclick2() {
    
    firebase.database().ref(unit_val+"/unit").once('value').then(function(dataSnapshot){
        document.getElementById("unit").value = dataSnapshot.val();       
    });
    firebase.database().ref(unit_val+"/ssid1").once('value').then(function(dataSnapshot){
        document.getElementById("ssid").value = dataSnapshot.val();       
    });
    firebase.database().ref(unit_val+"/pass1").once('value').then(function(dataSnapshot){
        document.getElementById("pass").value = dataSnapshot.val();       
    });
    firebase.database().ref(unit_val+"/line").once('value').then(function(dataSnapshot){
        document.getElementById("line").value = dataSnapshot.val();       
    });
    firebase.database().ref(unit_val+"/line2").once('value').then(function(dataSnapshot){
        document.getElementById("line2").value = dataSnapshot.val();       
    });

}

function login() {
    var user1;
    
    firebase.database().ref("login/user1").once('value').then(function(dataSnapshot){
        user1 = dataSnapshot.val();  
        // console.log(dataSnapshot.val());     
    });firebase.database().ref("login/pass1").once('value').then(function(dataSnapshot){
        var pass1 = dataSnapshot.val();       
    });
    firebase.database().ref("login/user2").once('value').then(function(dataSnapshot){
        var user2 = dataSnapshot.val();       
    });firebase.database().ref("login/pass2").once('value').then(function(dataSnapshot){
        var pass2 = dataSnapshot.val();       
    });
    

    console.log(document.getElementById("username").value);
    console.log(user1);

    
    // if(user1==document.getElementById("username").value && pass1==document.getElementById("password").value){
        console.log("OKKkkKKKKK");
    // }

}    


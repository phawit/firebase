var unit = document.getElementById("unit");
var ssid = document.getElementById("ssid");
var pass = document.getElementById("pass");
var line = document.getElementById("line");
var message = document.getElementById("message");

var button = document.getElementById("button");
var head = document.getElementById("head");

function myclick() {
    var unit_val = unit.value;
    var ssid_val = ssid.value;
    var pass_val = pass.value;
    var line_val = line.value;
    var message_val = message.value;

    window.alert("update success");
    var firebaseRef = firebase.database().ref();

    //firebaseRef.set(val);
    //firebaseRef.child(val).set("ssssss");

    //firebaseRef.set("xx");
    firebaseRef.child("unit").set(unit_val);
    firebaseRef.child("ssid").set(ssid_val);
    firebaseRef.child("pass").set(pass_val);
    firebaseRef.child("line").set(line_val);
    firebaseRef.child("message").set(message_val);
    


    
}
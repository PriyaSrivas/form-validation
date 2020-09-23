// Index Page Script Starts
function ValidateEmail()
{
var email = $('#myEmail').val();
let mailformat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (mailformat.test(email)) {
window.location.href='home.html';
}
else
{
alert("You have entered an invalid email address!");
}
}
// Index Page Script Ends

// Home Page Script Starts
function validation() {
var field1 = true;
var field2 = true;
var field3 = true;

if ($('#fullname').val() == " ") {
field1 = false;
alert('Enter your name');
}

if ($('#checkNumber').val() != "" ) {
var pattern = /^[1-9]([1-9])*(,[1-9]([1-9])*)*$/;
var testvalue = document.getElementById('checkNumber').value;
if(pattern.test(testvalue)){
field2 = true;
} else {
field2 = false;
}
if($('#years').val() != "") {
field3 = false;
}   
}

if(($('#checkNumber').val() == "") && ($('#years').val() == "" ))
{   field2 = false;
field3 = false;
alert("Please fill any one field from second and third");
}

if(field1 && field2 && field3){
window.location.href = 'welcome.html';
}
}
// Home Page Script Ends
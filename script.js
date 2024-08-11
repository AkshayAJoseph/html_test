alert("Welcome");
function fn() {
    var a=document.getElementById('ta').value;
document.getElementById('par').innerHTML=a;
        
}
function sendEmail() {
  var Email= document.getElementById('email').value;
  var subject = "Request to Connect";
  var body = "Hello, I would like to connect with you.";
  window.location.href = "mailto:akshayjoseph003@gmail.com"+"?subject" + encodeURIComponen(subject)+"&body=" + encodeURIComponent(body)+ "&cc="+ encodeURIComponent(Email);

}

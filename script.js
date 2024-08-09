alert("Welcome");
function fn() {
    var a=document.getElementById('ta').value;
document.getElementById('par').innerHTML=a;
        
}
<script type="text/javascript">
function sendEmail() {
  var email = document.getElementById("mail").value;
  var subject = "Request to Connect-reg.";
  var body = "Hello, I would like to conenct with you."
  window.location.href = "mailto:" +encodeURIComponent (email)+"?subject=" + encodeURIComponent(subject)&body + encodeURIComponent(body)+ "&cc=akshayjoseph003@gmail.com";

}

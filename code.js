setTimeout(function() {
  setScreen("screen2");
}, 1500);
onEvent("Googlemeet", "click", function( ) {
  open("https://meet.google.com/");
});
onEvent("googleclassroom", "click", function( ) {
  open("https://classroom.google.com/u/0/h");
});
onEvent("websitebutton", "click", function( ) {
  open("https://no1pondicherry.kvs.ac.in/");
});
onEvent("Help", "click", function( ) {
  setScreen("screen3");
});
onEvent("fromclassroom", "click", function( ) {
  setScreen("screen4");
});
onEvent("button7", "click", function( ) {
  open("https://fast.com/");
});
onEvent("troubleshoot", "click", function( ) {
  open("https://support.google.com/meethardware/answer/4541234?hl=en#:~:text=HD%20video%20quality%20bandwidth%20requirements&text=Outbound%20signals%20from%20a%20participant,3.2%20mbps%20with%205%20participants");
});
onEvent("back", "click", function( ) {
  setScreen("screen2");
});
onEvent("back2", "click", function( ) {
  setScreen("screen3");
});


var video = document.getElementById("player1");


window.addEventListener("load", function() {
	video.autoplay=false;
	video.loop=false;
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
 });


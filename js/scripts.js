$(document).ready(function() {
	var username = prompt("What is your name?");
	$('button#background-color-button').click(function(){
		$('body').toggleClass('black-background');
	});
	$("h1").click(function() {
	alert("This is h1!");
	});
	$("h2").click(function(){
		$("#KookaburraTimeline").toggle();
	});
	$("h3").click(function(){
		$(".form-group").toggle();
	});
	$("#myform form").submit(function(event){
		var entry = document.createElement('li');
		$(entry).text(username + ": " + $("input#message").val());
		$('ul').append(entry);
		event.preventDefault();
	});
});
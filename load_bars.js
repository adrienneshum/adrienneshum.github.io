$(document).ready(function() {
	$('#sidebar').load('sidebar.html div.wrap', function(data) {
		console.log(data);
	});
	$('#header').load('header.html div.wrap');
})
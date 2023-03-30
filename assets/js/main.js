$('.flipBtn').on('mousedown', function(){
	console.log("flippin");
	$(this).parents('.flipCard').toggleClass('flipped').children('.face').toggleClass('frontVisible');
});

$('#sendEmailBtn').on('click', function(){
	var subject = $('#subject').val();
	var msg = `${$('#message').val()} - \n ${$('#name').val()}`;
	window.open(`mailto:kvande85@uwo.ca?subject=${subject}&body=${msg}`);
})
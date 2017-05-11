function catMover() {
	$('.thumbnail').click(function(event){
		let bigCat = $(this).find('img').attr('src');
		$('.hero img').attr('src', bigCat);
	});
}

$(function () {
	catMover();
});

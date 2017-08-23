$('ul').on('click', 'li', function() {
	$(this).toggleClass('done');
});

// Click on X to delete Todo
$('ul').on('click', 'span', function(e) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").on('keypress', function(e) {
	if(e.which === 13) {
		var todoText = $(this).val();

		$(this).val('');

		// Create a new li and add to ul
		$('ul').append('<li><span>X</span> ' + todoText + '</li>')
	}
});
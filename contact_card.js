function createContact(first, last, description){
	$('.right').append('<div class="contact"><h1>'+first+' '+last+'</h1><h4>Click for more info!</h4></div>');
	$('.contact:nth-last-of-type(1)').data('info' , {first : first, last : last, description : description, flip : false});
};

function flip(){
	$('.contact:nth-last-of-type(1)').on('click', function(){
		$(this).data().info.flip = !$(this).data().info.flip;
		if(!$(this).data().info.flip){
			$(this).html('<h1>'+$(this).data().info.first+' '+$(this).data().info.last+'</h1><h4>Click for more info!</h4>');
		}else{
			$(this).html('<p>'+$(this).data().info.description+'</p>');
		}
	});
}

$(document).ready(function(){
	$('button').on('click', function(){
		createContact($('#first').val(), $('#last').val(), $('#description').val());
		flip();
		return false;
	});
});
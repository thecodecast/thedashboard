$(function(){
	var sideNavItems = $('.side-nav a');
	sideNavItems.click(function(e){
		e.preventDefault(); 
		$(this).parent().siblings().children().removeClass('activated'); 
		$(this).addClass('activated')
	})
});

$(function(){
	var loggedInMenu = $('.logged-in-user');
	loggedInMenu.hover(function(e){
		e.preventDefault(); 
		$(this).children('.the-dropdown').fadeIn(); 
	}, function(e){
		e.preventDefault(); 
		$(this).children('.the-dropdown').fadeOut(); 
	});
});

$(function(){
	var bulkChecker = $('#bulk-check'),
		bulkChecks = $('.bulk-check-select'),
		bulkAction = $('#bulk-action');
	bulkChecker.click(function(e){
		if (this.checked == true) {
			bulkChecks.each(function(idx, item){
				item.checked = true;
				bulkAction.addClass('button-animation');
			});	
		}else{
			bulkChecks.each(function(idx, item){
				item.checked = false;
				bulkAction.removeClass('button-animation');

			});
		}
		
	})
});
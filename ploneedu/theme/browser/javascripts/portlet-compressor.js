function below_618_px(){
    // make sure the portlet content is not hidden if using the accessibility button 
    if(window.location.hash != '#portal-globalnav') {
        $("dl.portlet").prepend('<button type="button" class="portlet-button">Show Portlet</button>');
        $('.portlet-button').each(function(index){
            $(this).removeClass('portlet-button').addClass('portlet-button' + index);
        });
        $('dd.portletItem').addClass('hide-portlet-content');
        $('button[class^="portlet-button"]').bind('click', function() {
            $(this).siblings('dd.portletItem').toggleClass('hide-portlet-content');
               });
        $('button[class^="portlet-button"]').toggle(function()  {  
               $(this).text("Hide Portlet");  
               },  
               function() {  
                $(this).text("Show Portlet"); 
               }
         );  
    }
}

$(document).ready(function() {
    if ($(window).width() < 618) {
        if ( $('button[class^="portlet-button"]').length == 0 ) {
            below_618_px();
        }
    }
    $(window).resize(function() {
        if ($(window).width() <= 618) { 
            if ( $('button[class^="portlet-button"]').length == 0 ) {
                below_618_px();
            }
	    }
	    if ($(window).width() > 618) {
	        $('dd.portletItem').removeClass('hide-portlet-content');
	        $('button[class^="portlet-button"]').remove();
	    }

	});
	
});


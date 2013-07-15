function add_plone_links(){
    $("body").prepend('<div id="plonelinks"><a href="http://plone.org">Plone.org</a> | <a href="http://plone.com">Plone.com</a> | <a href="http://plone.org/products"> Download </a> | <a href="#" >What is Plone?</a> | <a href="#">Plone Support</a>  <img src="++resource++ploneedu.theme.images/ploneicon.png" alt="Plone Icon" /></div>');
}

$(document).ready(function() {
        if ($(window).width() > 618) {
            add_plone_links(); 
        }
        $(window).resize(function() {
            if ($(window).width() <= 618) { 
		           $('#plonelinks').remove();
		    }
		    if ($(window).width() > 618) {
		        if ( $("#plonelinks").length == 0 ) {
		              add_plone_links();
		        }
		    }
		 });
});

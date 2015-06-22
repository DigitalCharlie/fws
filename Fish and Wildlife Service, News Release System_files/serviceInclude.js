// begin import of javascript files
function include(jsname) {
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
} 

// list of javascript files to be included. The line below should be used as a format reference
// include('/scripts/js/GoogleAnalytics.js'); change the path

//Google Analytics
include('/scripts/js/GoogleAnalytics.js');
//Google Analytics 2
include('/scripts/js/GoogleAnalytics2.js');



//AddThis script for AddThis sharing buttons on Service pages
//<script type="text/javascript">var addthis_config = {"data_track_clickback":true}</script>
//<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#username=usfwssshared"></script>
// end AddThis script

// end import of javascript files








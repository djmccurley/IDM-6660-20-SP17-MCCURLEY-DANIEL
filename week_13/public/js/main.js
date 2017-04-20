$(document).ready(function() {
	$("#search").click(searchWiki);

	function searchWiki() {
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "dataType": "jsonp",
		  "url": "",
		  "method": "GET",
		  "headers": {
		    'Api-User-Agent': 'Wikipedia Searcher/1.0'
		  }
		}
		var urlBase = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
		var searchTerm = document.getElementById("searchterm").value;
		settings["url"] = urlBase + searchTerm;
		console.log(settings["url"]);
	  $.ajax(settings).done(function(response) {
	  console.log(response);
	  $("#output").text(response);
		});
	}	
});
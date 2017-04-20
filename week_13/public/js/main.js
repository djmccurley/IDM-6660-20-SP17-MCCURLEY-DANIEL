$(document).ready(function() {
	$("#search").click(searchWiki);

	function searchWiki() {
		var searchSettings = {
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
		searchSettings["url"] = urlBase + searchTerm;
		console.log(searchSettings["url"]);
	  $.ajax(searchSettings).done(function(response) {
		  console.log(response);
		  processEntries(response);
		});
	}

	function processEntries(response) {
		for (i=0; i<response[1].length; i++) {
			var title = response[1][i];
			var description = response[2][i];
			var link = response[3][i];
			var thisArticle = new createEntry(title, description, link);
			appendEntry(thisArticle);
	}
}

function createEntry(title, description, link) {
	this.articleTitle = "<h2>" + title + "</h2>";
	this.articleDescription = "<p>" + description + "</p>";
	this.articleLink = "<a href='" + link + "' target='_blank'>" + link + "</a>";
}

function appendEntry(thisArticle) {
	var newDiv = document.createElement("div");
	newDiv.innerHTML = thisArticle.articleTitle;
	newDiv.innerHTML += thisArticle.articleDescription;
	newDiv.innerHTML += thisArticle.articleLink;

	$("#output").append(newDiv);

}	
});
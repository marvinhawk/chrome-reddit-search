let popup = document.getElementById("page")

let searchButton = document.getElementById("searchButton")

let searchField = document.getElementById("searchField")

let subURL = ""

popup.onload = function() {
	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
   	  let subName = /\/(r\/.*?)(?=\/)/
   	  curSub = subName.exec(tabs[0].url)
      if (curSub){
      	console.log(curSub[1])
      	subURL = curSub[1]
      	searchField.placeholder = curSub[1]
      } else {
      	console.log("No match for subreddit in URL")
      }      
   });
};

searchButton.onclick = function() {
	query = searchField.value
	let baseURL = "https://www.google.com/search?q=site%3Areddit.com/";
	let URL = baseURL + subURL + "+" + query
	if(query){
		chrome.tabs.create({ url: URL });
	};
};

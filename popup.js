let popup = document.getElementById("page")

let searchButton = document.getElementById("searchButton")

let searchField = document.getElementById("searchField")

let subURL = ""

popup.onload = function() {
	console.log("Popup loaded!")
	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
   	  let subName = /r\/.*?(?=\/)/
   	  curSub = subName.exec(tabs[0].url)
      if (curSub){
      	console.log(curSub[0])
      	subURL = curSub[0]
      	searchField.placeholder = curSub[0]
      } else {
      	console.log("Called before page load")
      }      
   });
};

searchButton.onclick = function() {
	console.log("Search button clicked.")
	query = searchField.value
	let baseURL = "https://www.google.com/search?q=site%3Areddit.com/";
	let URL = baseURL + subURL + "+" + query
	if(query){
		chrome.tabs.create({ url: URL });
	};
};

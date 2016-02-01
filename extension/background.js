//chrome.webRequest.onBeforeRequest.addListener(
//	function(details) {
//		// return {redirectUrl: "file:///home/mgeorg/agario_try2/agar.io/master.js" };
//		return {redirectUrl: "file:///home/mgeorg/alert.js" };
//	},
//	{urls: ["*://agar.io/js/master.js*"]},
//	["blocking"]);

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
    // alert('Making a change to ' + details.url);
		return {redirectUrl: "http://session-scheduler.com/static/agario/environment.js" };
	},
	{urls: ["*://agar.io/environment.js*"]},
	["blocking"]);

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
    // alert('Making a change to ' + details.url);
		return {redirectUrl: "http://session-scheduler.com/static/agario/main_out.js" };
	},
	{urls: ["*://agar.io/main_out.js*"]},
	["blocking"]);
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
    // alert('Making a change to ' + details.url);
		return {redirectUrl: "http://session-scheduler.com/static/agario/master.js" };
	},
	{urls: ["*://agar.io/master.js*"]},
	["blocking"]);

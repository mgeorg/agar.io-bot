/* globals
chrome
*/
var baseUrl = 'http://session-scheduler.com/static/agario/';

var endpoints = [
    'environment.js',
    'main_out.js',
    'master.js'
];

var redirectEndpoint = function(endpoint) {    
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            return { redirectUrl: baseUrl + endpoint };
        },
        {urls: ['*://agar.io/' + endpoint + '*']},
        ["blocking"]
    );
};

for (var i = 0; i < endpoints.length; i++) {
    redirectEndpoint(endpoints[i]);
}

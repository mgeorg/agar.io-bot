/* globals
chrome
*/
var baseUrl = 'http://0.0.0.0:5000';

var endpoints = [
    'environment.js',
    'main_out.js',
    'master.js'
];

var redirectEndpoint = function(endpoint) {    
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            return { redirectUrl: baseUrl + '/static/' + endpoint };
        },
        {urls: ['*://agar.io/' + endpoint + '*']},
        ["blocking"]
    );
};

for (var i = 0; i < endpoints.length; i++) {
    redirectEndpoint(endpoints[i]);
}
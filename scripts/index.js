'use strict';

/* eslint no-undef: 0 */
var mapboxURL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var map = L.map('embedded-map', {
  scrollWheelZoom: false
}).setView(coords, 16);

L.tileLayer(mapboxURL, {
  maxZoom: 18,
  id: 'mapbox.streets'
}).addTo(map);

L.marker(coords).addTo(map).openPopup();

/**
 * Tweets from last year
 */

var tweetsContainer = document.getElementById('tweets-container');

// FIXME: Read tweets from data.yml
var tweets = ['873561355571408896', '873485295160885248', '873569566961565701', '873450367668936704', '852477975811547136', '873485917213913089'];

tweets.forEach(function (tweetId) {
  return twttr.widgets.createTweet(tweetId, tweetsContainer, { linkColor: 'red' });
});
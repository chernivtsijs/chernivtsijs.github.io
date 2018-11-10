/* eslint no-undef: 0 */
import config from '../data.yml'

/**
 * Map
 */

const { latitude, longitude } = config.place.coords
const { latitude: latitudeMin, longitude: longitudeMin } = config.placeMin.coords
if(document.body.querySelector('#embedded-map')) {
    const map = L
    .map('embedded-map', {
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        tap: false
    })
    .setView([latitude, longitude], 16)

    L
    .tileLayer(config.place.url, {
        maxZoom: 18,
        id: 'mapbox.streets',
    })
    .addTo(map)

    L
    .marker([latitude, longitude])
    .addTo(map)
    .openPopup()
}


if (document.body.querySelector('#embedded-map-min')) {
    const mapMin = L
    .map('embedded-map-min', {
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        tap: false
    })
    .setView([latitudeMin, longitudeMin], 16)

    L
    .tileLayer(config.placeMin.url, {
        maxZoom: 20,
        id: 'mapbox.streets',
    })
    .addTo(mapMin)

    L
    .marker([latitudeMin, longitudeMin])
    .addTo(mapMin)
    .openPopup()
}

/**
 * Tweets from last year
 */

if (config.tweets && config.tweets.length > 0) {
  const tweetsContainer = document.getElementById('tweets-container')

  config.tweets.forEach(tweetId => twttr.widgets.createTweet(
    tweetId,
    tweetsContainer,
    { linkColor: 'red' }
  ))
}

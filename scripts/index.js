'use strict';

var data = { title: "ChernivtsiJS",
  titleMinJS: "chernivtsi.min.js",
  description: "Let's talk about JavaScript?",
  date: "June 20, 2020",
  action: { link: "https://forms.gle/HZ7s3gTHkcyZhGHT9",
    title: "Call For Papers" },
  speakesAction: { link: "#speakers",
    ankor: "speakers",
    title: "Our Speakers" },
  actionMin: { link: "https://docs.google.com/forms/d/e/1FAIpQLScGTebKC6xlMubAYkZADmw_Hwaxx5wX_i7J51IJjuhLJUrB5g/viewform",
    title: "Register" },
  place: { adress: "Chernivtsi National University, <br> Kotsyubyns'koho St, 2 <br> Chernivtsi, Ukraine",
    url: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    coords: { latitude: 48.297188,
      longitude: 25.9242539 } },
  placeMin: { adress: "Belle Vue <br /> Kobylyanska St, 2 <br /> Chernivtsi, Ukraine",
    url: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    coords: { latitude: 48.291658,
      longitude: 25.935338 } },
  navigation: [{ link: "/code-of-conduct",
    title: "Code Of Conduct" }, { link: "/city-guide",
    title: "City Guide" }, { link: "/archive/2019",
    title: 2019 }, { link: "/archive/2018",
    title: 2018 }, { link: "/archive/2017",
    title: 2017 }],
  social: [{ link: "//t.me/chernivtsijs",
    icon: "/images/icons/telegram.png" }, { link: "//www.facebook.com/chernivtsijs",
    icon: "/images/icons/facebook.png" }, { link: "//twitter.com/chernivtsijs",
    icon: "/images/icons/twitter.png" }, { link: "//instagram.com/chernivtsijs",
    icon: "/images/icons/instagram.png" }, { link: "//github.com/chernivtsijs",
    icon: "/images/icons/github.png" }],
  partners: null,
  venue: ["/images/venue/1.jpg", "/images/venue/2.jpg", "/images/venue/3.jpg", "/images/venue/4.jpg", "/images/venue/5.jpg"],
  tweets: ["1143241743619579908", "1142760083081895937", "1142495470180327427", "1144316340477583360", "1145591159529627648", "1142481777015103488"],
  contacts: [{ name: "Denys Dovhan",
    email: "denysdovhan@gmail.com",
    fb: "https://www.facebook.com/denysdovhan",
    phone: "+380 (95) 11 00 392" }, { name: "Denis Zavgorodny",
    email: "denis.zavgorodny@gmail.com",
    fb: "https://www.facebook.com/denis.zavgorodny",
    phone: "+380 (50) 76 28 045" }],
  speakersMin: [{ name: "Anastasiia Nedbailo",
    photo: "/images/min.js/2019/Anastasiia_Nedbailo.jpg",
    work: "Ukraine, Chernivtsi",
    topic: "Secret topic",
    lightning: false }, { name: "Denys Mohylin",
    photo: "/images/min.js/2019/Denys_Mohylin.jpg",
    work: "Ukraine, Chernivtsi",
    topic: "Your architectural hell",
    lightning: false }, { name: "Denis Zavgorodny",
    photo: "/images/min.js/2019/Denis_Zavgorodny.jpg",
    work: "Ukraine, Kyiv",
    topic: "What about Biometric and U2F Token Web Authentication?",
    lightning: false }, { name: "Denys Dovhan",
    photo: "/images/min.js/2019/denys_dovhan.jpg",
    work: "Ukraine, Kyiv",
    topic: "Як писати пет-проекти",
    lightning: false }],
  scheduleMin: [{ name: "Registration",
    time: "11:30-12:00",
    tech: true }, { name: "👋🏻 Opening talk",
    time: "12:00-12:05",
    tech: true }, { name: "🗣 First talks section",
    time: "12:05-13:45",
    tech: true }, { name: "☕️ Break",
    time: "13:45-15:00",
    tech: true }, { name: "🗣 Second talks section",
    time: "15:00-17:00",
    tech: true }, { name: "🏁 Closing talk",
    time: "17:00-17:20",
    tech: true }, { name: "🍸 Afterparty",
    time: "20:00-∞",
    tech: true }],
  assets: [{ version: 1 }] };

/* eslint no-undef: 0 */
/**
 * Map
 */

var _config$place$coords = data.place.coords;
var latitude = _config$place$coords.latitude;
var longitude = _config$place$coords.longitude;
var _config$placeMin$coor = data.placeMin.coords;
var latitudeMin = _config$placeMin$coor.latitude;
var longitudeMin = _config$placeMin$coor.longitude;

if (document.body.querySelector('#embedded-map')) {
    var map = L.map('embedded-map', {
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        tap: false
    }).setView([latitude, longitude], 16);

    L.tileLayer(data.place.url, {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map).openPopup();
}

if (document.body.querySelector('#embedded-map-min')) {
    var mapMin = L.map('embedded-map-min', {
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        tap: false
    }).setView([latitudeMin, longitudeMin], 16);

    L.tileLayer(data.placeMin.url, {
        maxZoom: 20,
        id: 'mapbox.streets'
    }).addTo(mapMin);

    L.marker([latitudeMin, longitudeMin]).addTo(mapMin).openPopup();
}

/**
 * Tweets from last year
 */

if (data.tweets && data.tweets.length > 0) {
    var tweetsContainer = document.getElementById('tweets-container');

    data.tweets.forEach(function (tweetId) {
        return twttr.widgets.createTweet(tweetId, tweetsContainer, { linkColor: 'red' });
    });
}

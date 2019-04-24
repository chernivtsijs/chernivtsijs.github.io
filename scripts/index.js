'use strict';

var data = { title: "ChernivtsiJS",
  titleMinJS: "chernivtsi.min.js",
  description: "Let's talk about JavaScript?",
  date: "June 22-23, 2019",
  speakesAction: { link: "#speakers",
    ankor: "speakers",
    title: "Our Speakers" },
  action: { link: "https://goo.gl/forms/fxUbK8yiUW5jxPcs2",
    title: "Submit your talk" },
  actionMin: { link: "https://docs.google.com/forms/d/e/1FAIpQLScyHxN4maV---tJcTXUw4IWtrjGHMPu_CzAtcxfn5KuLV_CPQ/viewform",
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
    title: "City Guide" }, { link: "/2018",
    title: 2018 }, { link: "/2017",
    title: 2017 }],
  social: [{ link: "//telegram.me/joinchat/Bq7KYT8X1sdwJ5WB8k-kOg",
    icon: "/images/icons/telegram.png" }, { link: "//www.facebook.com/chernivtsijs",
    icon: "/images/icons/facebook.png" }, { link: "//twitter.com/chernivtsijs",
    icon: "/images/icons/twitter.png" }, { link: "//instagram.com/chernivtsijs",
    icon: "/images/icons/instagram.png" }, { link: "//github.com/chernivtsijs",
    icon: "/images/icons/github.png" }],
  speakers: null,
  schedule: null,
  partners: null,
  venue: ["/images/venue/1.jpg", "/images/venue/2.jpg", "/images/venue/3.jpg", "/images/venue/4.jpg", "/images/venue/5.jpg"],
  tweets: ["1010494117187588098", "873981443910840322", "1010640903357247488"],
  contacts: [{ name: "Denys Dovhan",
    email: "denysdovhan@gmail.com",
    fb: "https://www.facebook.com/denysdovhan",
    phone: "+380 (95) 11 00 392" }, { name: "Denis Zavgorodny",
    email: "denis.zavgorodny@gmail.com",
    fb: "https://www.facebook.com/denis.zavgorodny",
    phone: "+380 (50) 76 28 045" }],
  speakersMin: [{ name: "Christina Landvytovych",
    photo: "/images/min.js/Christina_Landvytovych.jpg",
    work: "Kyiv, Ukraine",
    about: "Angular/React dev, codenewbie, AI research student, speaker, lover of beerjs community, girl with great ambitious and low budget",
    topic: "Are you (w)here? Using maps in your projects",
    lightning: false }, { name: "Sergey Koshman",
    photo: "/images/min.js/koshman.640x640.jpg",
    work: "Kyiv, Ukraine",
    topic: "Where canvas will provide benefits to your experience",
    about: "Frontend experimentalist, beerJs activist, speaker, co-organizer of KyivJs, AngularKyiv, PubTalk",
    lightning: false }, { name: "Stas Demchuk",
    photo: "/images/min.js/Stas_Demchuk.jpg",
    work: "Ivano-Frankivsk, Ukraine",
    topic: "Make your Product With Node.js, AWS Lambda and Alexa",
    about: "Software Engineer passionate about front-end, AI and ML",
    lightning: false }, { name: "Ivan Lavriv",
    photo: "/images/min.js/Ivan_Lavriv.jpg",
    work: "Lviv, Ukraine",
    topic: "Move your code to microservices",
    about: "Любитель програмування, пива, походів та важкої музики, на час виступу ще буду безробітним. До цього часу програмував на різних технологіях і робив різні задачі в індустрії і буду продовжувати. крім того викладаю курс Web UI в LITS",
    lightning: false }, { name: "Denys Mohylin",
    photo: "/images/min.js/Denys_Mohylin.jpg",
    work: "Chernivtsi, Ukraine",
    topic: "Why I changed side of \"End\"",
    about: "I am frontend developer that want to start take some part in IT community of the town",
    lightning: true }],
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

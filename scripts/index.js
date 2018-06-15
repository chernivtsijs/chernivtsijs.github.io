'use strict';

var data = { title: "ChernivtsiJS",
  description: "Let's talk about JavaScript?",
  date: "June 23, 2018",
  speakesAction: { link: "#speakers",
    ankor: "speakers",
    title: "Our Speakers" },
  action: { link: "https://2event.com/events/1384395",
    title: "Buy Tickets" },
  place: { adress: "Chernivtsi National University, <br> Kotsyubyns'koho St, 2 <br> Chernivtsi, Ukraine",
    url: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    coords: { latitude: 48.297188,
      longitude: 25.9242539 } },
  navigation: [{ link: "/code-of-conduct",
    title: "Code Of Conduct" }, { link: "/city-guide",
    title: "City Guide" }, { link: "/2017",
    title: 2017 }],
  social: [{ link: "//telegram.me/joinchat/Bq7KYT8X1sdwJ5WB8k-kOg",
    icon: "/images/icons/telegram.png" }, { link: "//www.facebook.com/chernivtsijs",
    icon: "/images/icons/facebook.png" }, { link: "//twitter.com/chernivtsijs",
    icon: "/images/icons/twitter.png" }, { link: "//instagram.com/chernivtsijs",
    icon: "/images/icons/instagram.png" }, { link: "//github.com/chernivtsijs",
    icon: "/images/icons/github.png" }],
  speakers: [{ name: "Aleksandar Simovic",
    photo: "/images/speakers/aleksandar-simovic.jpg",
    work: "Effortless Serverless, Belgrade, Serbia",
    topic: "Serverless for frontend developers",
    lightning: false }, { name: "Vasilika Klimova",
    photo: "/images/speakers/vasilika-klimova.jpg",
    work: "Artec3D, Gostingen, Luxembourg",
    topic: "This terrible word Deadline",
    lightning: false }, { name: "Sergey Rubanov",
    photo: "/images/speakers/sergey-rubanov.jpg",
    work: "Exantech, Oryol, Russia",
    topic: "Просто о WebAssembly",
    lightning: false }, { name: "Anton Nemtsev",
    photo: "./images/speakers/anton-nemtsev.jpg",
    work: "TemplateMonster, Kyiv, Ukraine",
    topic: "Make checkout great again",
    lightning: false }, { name: "Anton Yatseniuk",
    photo: "/images/speakers/anton-yatseniuk.jpg",
    work: "Rolique, Lviv, Ukraine",
    topic: "How to adopt a project with stack which you don't know",
    lightning: false }, { name: "Ilya Ivanov",
    photo: "/images/speakers/ilya-ivanov.jpg",
    work: "Itera Consulting, Kyiv, Ukraine",
    topic: "Как React-Native перевернул наше представление о нативных приложениях",
    lightning: false }, { name: "Helen Zhukova",
    photo: "/images/speakers/helen-zhukova1.jpg",
    work: "VIDEOGORILLAS, Kyiv, Ukraine",
    topic: "О дивный новый JS мир. Как будет выглядеть и чем будет заниматься JS разработчик в будущем",
    lightning: false }, { name: "Anastasiia Nedbailo",
    photo: "/images/speakers/anastasiia-nedbailo.jpg",
    work: "YUKON, Chernivtsi, Ukraine",
    topic: "Angular applications with Redux",
    lightning: true }, { name: "Terry Sahaidak",
    photo: "/images/speakers/terry-sahaidak.jpg",
    work: "Apiko, Ternopil, Ukraine",
    topic: "Life with Expo.io",
    lightning: true }],
  partners: { special: [{ name: "AlterEGO",
      logo: "/images/partners/alterego.png",
      link: "//alterego.digital" }, { name: "Chernivtsi National University",
      logo: "/images/partners/chnu.png",
      link: "//chnu.edu.ua" }],
    platinum: [{ name: "Bizico",
      logo: "/images/partners/bizico.svg",
      link: "//bizico.com" }],
    gold: [{ name: "SoftServe",
      logo: "/images/partners/softserve.svg",
      link: "//www.softserveinc.com" }, { name: "ASD",
      logo: "/images/partners/asd.png",
      link: "//asd-team.com/" }, { name: "Svitla Systems",
      logo: "/images/partners/SvSys_Logo.svg",
      link: "//svitla.com/" }, { name: "DataArt",
      logo: "/images/partners/data-art.svg?v1",
      link: "//dataart.ua/" }, { name: "AMCBridge",
      logo: "/images/partners/amc-bridge.svg?v1",
      link: "//amcbridge.com.ua/" }],
    silver: [{ name: "Dou",
      logo: "/images/partners/dou-logo.png",
      link: "//dou.ua/" }, { name: "Fwdays",
      logo: "/images/partners/fwdays.png",
      link: "//fwdays.com/" }, { name: "Owlygon",
      logo: "/images/partners/owlygon.png",
      link: "//bohdanov.com/" }, { name: "NodeSchool Chernivtsi",
      logo: "/images/partners/nodeschool.png",
      link: "//nodeschool.io/chernivtsi" }, { name: "Відділ комп’ютерних технологій ІФТКН ЧНУ",
      logo: "/images/partners/dct.png",
      link: "//ptcsi.chnu.edu.ua/en" }, { name: "DogeCodes",
      logo: "/images/partners/dogecodes.png",
      link: "//doge.codes" }, { name: "TemplateMonster",
      logo: "/images/partners/template-monster.png",
      link: "//www.templatemonster.com/" }] },
  venue: ["/images/venue/1.jpg", "/images/venue/2.jpg", "/images/venue/3.jpg", "/images/venue/4.jpg", "/images/venue/5.jpg"],
  tweets: ["873561355571408896", "873485295160885248", "873569566961565701", "873450367668936704", "852477975811547136", "873485917213913089"],
  contacts: [{ name: "Denys Dovhan",
    email: "denysdovhan@gmail.com",
    fb: "https://www.facebook.com/denysdovhan",
    phone: "+380 (95) 11 00 392" }, { name: "Denis Zavgorodny",
    email: "denis.zavgorodny@gmail.com",
    fb: "https://www.facebook.com/denis.zavgorodny",
    phone: "+380 (50) 76 28 045" }] };

/* eslint no-undef: 0 */
/**
 * Map
 */

var _config$place$coords = data.place.coords;
var latitude = _config$place$coords.latitude;
var longitude = _config$place$coords.longitude;


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

/**
 * Tweets from last year
 */

if (data.tweets && data.tweets.length > 0) {
  var tweetsContainer = document.getElementById('tweets-container');

  data.tweets.forEach(function (tweetId) {
    return twttr.widgets.createTweet(tweetId, tweetsContainer, { linkColor: 'red' });
  });
}

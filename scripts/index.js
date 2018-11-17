'use strict';

var data = { title: "ChernivtsiJS",
  titleMinJS: "chernivtsi.min.js",
  description: "Let's talk about JavaScript?",
  date: "June 23, 2018",
  dateNext: "December 01, 2018",
  speakesAction: { link: "#speakers",
    ankor: "speakers",
    title: "Our Speakers" },
  action: { link: "https://2event.com/events/1384395",
    title: "Buy Tickets" },
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
  navigation: [{ link: "/min",
    title: "Meetup Winter 2018" }, { link: "/code-of-conduct",
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
    topic: "О дивный новый JS–мир",
    lightning: false }, { name: "Anastasiia Nedbailo",
    photo: "/images/speakers/anastasiia-nedbailo.jpg",
    work: "YUKON, Chernivtsi, Ukraine",
    topic: "Angular applications with Redux",
    lightning: true }, { name: "Terry Sahaidak",
    photo: "/images/speakers/terry-sahaidak.jpg",
    work: "Apiko, Ternopil, Ukraine",
    topic: "Life with Expo.io",
    lightning: true }],
  schedule: [{ name: "🥐 Registration & breakfast",
    time: "9:00-9:50",
    tech: true }, { name: "👋🏻 Opening talk",
    time: "9:50-10:00",
    tech: true }, { name: "Anton Yatseniuk",
    time: "10:00-10:40",
    topic: "How to adopt a project with stack which you don't know",
    tech: false }, { name: "Aleksandar Simovic",
    time: "10:40-11:20",
    topic: "Serverless for frontend developers",
    tech: false }, { name: "☕️ Coffeebreak",
    time: "11:20-11:50",
    tech: true }, { name: "🗣 Interview session",
    time: "11:50-12:00",
    tech: true }, { name: "Vasilika Klimova",
    time: "12:00-12:40",
    topic: "This terrible word Deadline",
    tech: false }, { name: "Ilya Ivanov",
    time: "12:40-13:20",
    topic: "Как React-Native перевернул наше представление о нативных приложениях",
    tech: false }, { name: "🍽 Lunch",
    time: "13:20-14:50",
    tech: true }, { name: "Anastasiia Nedbailo",
    time: "14:50-15:05",
    topic: "Angular applications with Redux",
    tech: false }, { name: "️️Terry Sahaidak",
    time: "15:05-15:20",
    topic: "Life with Expo.io",
    tech: false }, { name: "Sergey Rubanov",
    time: "15:20-16:00",
    topic: "Просто о WebAssembly",
    tech: false }, { name: "☕️ Coffeebreak",
    time: "16:00-16:30",
    tech: true }, { name: "🗣 Interview session",
    time: "16:30-16:40",
    tech: true }, { name: "Helen Zhukova",
    time: "16:40-17:20",
    topic: "О дивный новый JS–мир",
    tech: false }, { name: "Anton Nemtsev",
    time: "17:20-18:00",
    topic: "Make checkout great again",
    tech: false }, { name: "🎤 QA-session",
    time: "18:00-18:40",
    topic: "Panel discussion with speakers",
    tech: false }, { name: "🏁 Closing talk",
    time: "18:40-19:00",
    tech: true }, { name: "🍸 Afterparty",
    time: "20:00-∞",
    tech: true }],
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
      logo: "/images/partners/amc-bridge1.svg?v1",
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
      link: "//www.templatemonster.com/" }, { name: "Sigma Software",
      logo: "/images/partners/Sigma_Software.svg",
      link: "//sigma.software/" }] },
  venue: ["/images/venue/1.jpg", "/images/venue/2.jpg", "/images/venue/3.jpg", "/images/venue/4.jpg", "/images/venue/5.jpg"],
  tweets: ["873561355571408896", "873485295160885248", "873569566961565701", "873450367668936704", "852477975811547136", "873485917213913089"],
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
    topic: "TBA",
    lightning: false }, { name: "Sergey Koshman",
    photo: "/images/min.js/koshman.640x640.jpg",
    work: "Kyiv, Ukraine",
    topic: "Where canvas will provide benefits to your experience",
    about: "Frontend experimentalist, beerJs activist, speaker, co-organizer of KyivJs, AngularKyiv, PubTalk",
    lightning: false }, { name: "Stas Demchuk",
    photo: "/images/min.js/Stas_Demchuk.jpg",
    work: "Ivano-Frankivsk, Ukraine",
    topic: "Make your Product talk With Node.js, AWS Lambda and Alexa",
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

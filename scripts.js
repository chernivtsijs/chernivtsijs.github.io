(function () {
  var elem = document.querySelector('.subject');

  var subjects = [
    "Angular", "React", "Flux", "jQuery", "d3", "Bootstrap", "React Native",
    "Foundation", "Underscore", "Lodash", "Backbone", "Ember", "Meteor",
    "HTML", "CSS", "PostCSS", "Redux", "Electron"
  ];

  console.log(subjects.length);
  setInterval(function() {
    const i = Math.round(
      Math.random() * (subjects.length-1) // Random index from subjects
    );
    console.log(i);
    elem.innerHTML = subjects[i];
  }, 1000);
})();

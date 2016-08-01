  var aosaa = require("aos-any-animation");
  aosaa.init({});


  
(function mountClaimForm() {
  
  var animation = function Animation() {
    var elm = this;
    var newone = elm.cloneNode(true);
    newone.addEventListener('click', animation);
    elm.parentNode.replaceChild(newone, elm);
  };
  var cubes = document.getElementsByClassName("item__inner");
  for (i=0;i<cubes.length;i++){
    cubes[i].parentElement.addEventListener('click', animation);
  }



}());
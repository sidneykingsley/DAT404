var slideIndex = 1;
showDivs(slideIndex);

var myVar = setInterval(myTimer, 5000);

function myTimer() {
  plusDivs(1);
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var wIndex = 1;
wshowDivs(wIndex);

var wVar = setInterval(wTimer, 100);

function wTimer() {
  wplusDivs(1);
}

function wplusDivs(w) {
  wshowDivs(wIndex += w);
}

function wshowDivs(w) {
  var j;
  var x = document.getElementsByClassName("wslides");
  if (w > x.length) {wIndex = 1}
  if (w < 1) {wIndex = x.length}
  for (j = 0; j < x.length; j++) {
     x[j].style.display = "none";
  }
  x[wIndex-1].style.display = "block";
}

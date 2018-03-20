var w = window.innerWidth;
var h = window.innerHeight;
//page loading cover
var coverCount = setTimeout(coverShow, 1000);
function coverShow(){
  if (w > 450) {
    document.getElementById("cover").style.visibility = "hidden";
    document.getElementById("cover").style.opacity = "0";
    document.getElementById("cover").style.transition = "visibility 1.5s, opacity 1.5s linear";
  }
  else {
    document.getElementById("cover").style.visibility = "hidden";
    document.getElementById("cover").style.opacity = "0";
    document.getElementById("cover").style.transition = "visibility 1.5s, opacity 1.5s linear";
    document.getElementById("welcome-msg").style.visibility = "hidden";
  }
}

//functions to call on page load
window.onload = function() {cssSort(); smoothScrolling();};


//variables
var scrollTop = 0;
var scrollTime = setInterval(pageCount, 100);

//heights, widths and postioning
function cssSort() {
  document.getElementById("welcome-msg").style.height = h+"px";
  var msgPos = h/3;
  document.getElementById("slider").style.left = w/2-100+"px";
  document.getElementById("slider").style.top = msgPos+"px";
  var welcomeCount = setTimeout(welcomeClose, 2500);
}

function smoothScrolling() {
  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });

}

//navigation
function navOpen() {
  document.getElementById("nav").style.marginTop = "0px";
  document.getElementById("nav").style.visibility = "visible";
  document.getElementById("nav").style.opacity = "1";
  document.getElementById("nav").style.transition = "opacity 0.25s linear";
}

function navClose() {
  document.getElementById("nav").style.visibility = "hidden";
  document.getElementById("nav").style.opacity = "0";
  document.getElementById("nav").style.transition = "visibility 0s 0.25s, opacity 0.25s linear";
}


//MOBILE navigation
function mobileNavOpen() {
  document.getElementById("mobile-nav").style.marginTop = "0px";
  document.getElementById("mobile-nav").style.visibility = "visible";
  document.getElementById("mobile-nav").style.opacity = "1";
  document.getElementById("mobile-nav").style.transition = "opacity 0.25s linear";
}

function mobileNavClose() {
  document.getElementById("mobile-nav").style.visibility = "hidden";
  document.getElementById("mobile-nav").style.opacity = "0";
  document.getElementById("mobile-nav").style.transition = "visibility 0s 0.25s, opacity 0.25s linear";
}


// welcome message
function welcomeClose() {
  $('#slider').toggleClass('open');
  $('#welcome-text1').toggleClass('newWelText');
  document.getElementById("welcome-msg").style.visibility = "hidden";
  document.getElementById("welcome-msg").style.opacity = "0";
  document.getElementById("welcome-msg").style.transition = "visibility 1s, opacity 1s linear";
  //document.getElementById("welcome-text1").style.fontSize = "12px";
  console.log("done");
}




//img hover effect
function imgHover(x) {
  var iconUrl = x.getAttribute("src");
  iconUrl = iconUrl.replace(/\.[^.]+$/, "")
  x.src = iconUrl+"2.png";
}

function imgOff(x) {
  var iconUrl = x.getAttribute("src");
  iconUrl = iconUrl.replace(/\62.*/g, "")
  x.src = iconUrl+".png";
}


//page numbering
function pageCount(){
  scrollTop = window.pageYOffset;
  console.log(scrollTop);
  if (w < 600) {mobilePageCount();}
  else if (w > 600 && w < 700) {tabletPageCount();}
  else if (w > 700 && w < 1030) {laptopPageCount();}
  else if (w > 1030 && w < 1600) {desktopPageCount();}
  else {
      if (scrollTop < 1200) {
        document.getElementById("title-page-num").innerHTML = "01";
        document.getElementById("scroll").style.visibility = "visible";
        document.getElementById("w-nav").style.color = "#eee";
        document.getElementById("g-nav").style.color = "#eee";
        document.getElementById("a-nav").style.color = "#eee";
        document.getElementById("p-nav").style.color = "#eee";
        document.getElementById("f-nav").style.color = "#eee";
      }
      else if (scrollTop > 1200 && scrollTop < 2800) {
        document.getElementById("title-page-num").innerHTML = "02";
        document.getElementById("scroll").style.visibility = "hidden";
        document.getElementById("w-nav").style.color = "#6f6f6f";
        document.getElementById("g-nav").style.color = "#eee";
        document.getElementById("a-nav").style.color = "#eee";
        document.getElementById("p-nav").style.color = "#eee";
        document.getElementById("f-nav").style.color = "#eee";
      }
      else if (scrollTop > 2800 && scrollTop < 7400) {
        document.getElementById("title-page-num").innerHTML = "03";
        document.getElementById("scroll").style.visibility = "hidden";
        document.getElementById("w-nav").style.color = "#eee";
        document.getElementById("g-nav").style.color = "#6f6f6f";
        document.getElementById("a-nav").style.color = "#eee";
        document.getElementById("p-nav").style.color = "#eee";
        document.getElementById("f-nav").style.color = "#eee";
      }
      else if (scrollTop > 7400 && scrollTop < 11600) {
        document.getElementById("title-page-num").innerHTML = "04";
        document.getElementById("scroll").style.visibility = "hidden";
        document.getElementById("w-nav").style.color = "#eee";
        document.getElementById("g-nav").style.color = "#eee";
        document.getElementById("a-nav").style.color = "#6f6f6f";
        document.getElementById("p-nav").style.color = "#eee";
        document.getElementById("f-nav").style.color = "#eee";
      }
      else if (scrollTop > 11600) {
        document.getElementById("title-page-num").innerHTML = "05";
        document.getElementById("scroll").style.visibility = "hidden";
        document.getElementById("w-nav").style.color = "#eee";
        document.getElementById("g-nav").style.color = "#eee";
        document.getElementById("a-nav").style.color = "#eee";
        document.getElementById("p-nav").style.color = "#6f6f6f";
        document.getElementById("f-nav").style.color = "#eee";
      }
  }
};

function mobilePageCount(){
  scrollTop = window.pageYOffset;
  if (scrollTop < 300) {
    document.getElementById("title-page-num").innerHTML = "01";
    document.getElementById("w-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("g-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("a-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("p-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)"
  }
  else if (scrollTop > 300 && scrollTop < 1200) {
    document.getElementById("title-page-num").innerHTML = "02";
    document.getElementById("w-mnav").style.backgroundColor = "#4a4a4a";
    document.getElementById("g-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("a-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("p-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)"
  }
  else if (scrollTop > 1200 && scrollTop < 4450) {
      document.getElementById("title-page-num").innerHTML = "03";
      document.getElementById("w-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("g-mnav").style.backgroundColor = "#4a4a4a";
      document.getElementById("a-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("p-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
  }
  else if (scrollTop > 4450 && scrollTop < 7200) {
      document.getElementById("title-page-num").innerHTML = "04";
      document.getElementById("w-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("g-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("a-mnav").style.backgroundColor = "#4a4a4a";
      document.getElementById("p-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
  }
  else if (scrollTop > 7200) {
      document.getElementById("title-page-num").innerHTML = "05";
      document.getElementById("w-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("g-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("a-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("p-mnav").style.backgroundColor = "#4a4a4a";
      document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
  }
}



function tabletPageCount(){
  scrollTop = window.pageYOffset;
  if (scrollTop < 450) {
    document.getElementById("title-page-num").innerHTML = "01";
    document.getElementById("w-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("g-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("a-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("p-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)"
  }
  else if (scrollTop > 450 && scrollTop < 1450) {
    document.getElementById("title-page-num").innerHTML = "02";
    document.getElementById("w-mnav").style.backgroundColor = "#4a4a4a";
    document.getElementById("g-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("a-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("p-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)"
  }
  else if (scrollTop > 1450 && scrollTop < 6450) {
      document.getElementById("title-page-num").innerHTML = "03";
      document.getElementById("w-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("g-mnav").style.backgroundColor = "#4a4a4a";
      document.getElementById("a-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("p-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
  }
  else if (scrollTop > 6450 && scrollTop < 9450) {
      document.getElementById("title-page-num").innerHTML = "04";
      document.getElementById("w-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("g-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("a-mnav").style.backgroundColor = "#4a4a4a";
      document.getElementById("p-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
  }
  else if (scrollTop > 9450) {
      document.getElementById("title-page-num").innerHTML = "05";
      document.getElementById("w-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("g-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("a-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
      document.getElementById("p-mnav").style.backgroundColor = "#4a4a4a";
      document.getElementById("f-mnav").style.backgroundColor = "rgba(0,0,0,0.0)";
  }
}


function laptopPageCount(){
  scrollTop = window.pageYOffset;
  if (scrollTop < 550) {
    document.getElementById("title-page-num").innerHTML = "01";
    document.getElementById("scroll").style.visibility = "visible";
    document.getElementById("w-nav").style.color = "#eee";
    document.getElementById("g-nav").style.color = "#eee";
    document.getElementById("a-nav").style.color = "#eee";
    document.getElementById("p-nav").style.color = "#eee";
    document.getElementById("f-nav").style.color = "#eee";
  }
  else if (scrollTop > 550 && scrollTop < 1600) {
    document.getElementById("title-page-num").innerHTML = "02";
    document.getElementById("scroll").style.visibility = "hidden";
    document.getElementById("w-nav").style.color = "#6f6f6f";
    document.getElementById("g-nav").style.color = "#eee";
    document.getElementById("a-nav").style.color = "#eee";
    document.getElementById("p-nav").style.color = "#eee";
    document.getElementById("f-nav").style.color = "#eee";
  }
  else if (scrollTop > 1600 && scrollTop < 4060) {
    document.getElementById("title-page-num").innerHTML = "03";
    document.getElementById("scroll").style.visibility = "hidden";
    document.getElementById("w-nav").style.color = "#eee";
    document.getElementById("g-nav").style.color = "#6f6f6f";
    document.getElementById("a-nav").style.color = "#eee";
    document.getElementById("p-nav").style.color = "#eee";
    document.getElementById("f-nav").style.color = "#eee";
  }
  else if (scrollTop > 4060 && scrollTop < 6350) {
    document.getElementById("title-page-num").innerHTML = "04";
    document.getElementById("scroll").style.visibility = "hidden";
    document.getElementById("w-nav").style.color = "#eee";
    document.getElementById("g-nav").style.color = "#eee";
    document.getElementById("a-nav").style.color = "#6f6f6f";
    document.getElementById("p-nav").style.color = "#eee";
    document.getElementById("f-nav").style.color = "#eee";
  }
  else if (scrollTop > 6350) {
    document.getElementById("title-page-num").innerHTML = "05";
    document.getElementById("scroll").style.visibility = "hidden";
    document.getElementById("w-nav").style.color = "#eee";
    document.getElementById("g-nav").style.color = "#eee";
    document.getElementById("a-nav").style.color = "#eee";
    document.getElementById("p-nav").style.color = "#6f6f6f";
    document.getElementById("f-nav").style.color = "#eee";
  }
}


function desktopPageCount(){
  scrollTop = window.pageYOffset;
  if (scrollTop < 700) {
    document.getElementById("title-page-num").innerHTML = "01";
    document.getElementById("scroll").style.visibility = "visible";
    document.getElementById("w-nav").style.color = "#eee";
    document.getElementById("g-nav").style.color = "#eee";
    document.getElementById("a-nav").style.color = "#eee";
    document.getElementById("p-nav").style.color = "#eee";
    document.getElementById("f-nav").style.color = "#eee";
  }
  else if (scrollTop > 700 && scrollTop < 1800) {
    document.getElementById("title-page-num").innerHTML = "02";
    document.getElementById("scroll").style.visibility = "hidden";
    document.getElementById("w-nav").style.color = "#6f6f6f";
    document.getElementById("g-nav").style.color = "#eee";
    document.getElementById("a-nav").style.color = "#eee";
    document.getElementById("p-nav").style.color = "#eee";
    document.getElementById("f-nav").style.color = "#eee";
  }
  else if (scrollTop > 1800 && scrollTop < 4700) {
    document.getElementById("title-page-num").innerHTML = "03";
    document.getElementById("scroll").style.visibility = "hidden";
    document.getElementById("w-nav").style.color = "#eee";
    document.getElementById("g-nav").style.color = "#6f6f6f";
    document.getElementById("a-nav").style.color = "#eee";
    document.getElementById("p-nav").style.color = "#eee";
    document.getElementById("f-nav").style.color = "#eee";
  }
  else if (scrollTop > 4700 && scrollTop < 7400) {
    document.getElementById("title-page-num").innerHTML = "04";
    document.getElementById("scroll").style.visibility = "hidden";
    document.getElementById("w-nav").style.color = "#eee";
    document.getElementById("g-nav").style.color = "#eee";
    document.getElementById("a-nav").style.color = "#6f6f6f";
    document.getElementById("p-nav").style.color = "#eee";
    document.getElementById("f-nav").style.color = "#eee";
  }
  else if (scrollTop > 7400) {
    document.getElementById("title-page-num").innerHTML = "05";
    document.getElementById("scroll").style.visibility = "hidden";
    document.getElementById("w-nav").style.color = "#eee";
    document.getElementById("g-nav").style.color = "#eee";
    document.getElementById("a-nav").style.color = "#eee";
    document.getElementById("p-nav").style.color = "#6f6f6f";
    document.getElementById("f-nav").style.color = "#eee";
  }
}

// var counter1 = document.querySelector(".counter1 span").innerHTML;
// var counter2 = document.querySelector(".counter2 span").innerHTML;
// var counter3 = document.querySelector(".counter3 span").innerHTML;
// var counter4 = document.querySelector(".counter4 span").innerHTML;
// var cooperateComImg = document.querySelectorAll(
//   ".cooperateCompanies .images img"
// );
// var observerSections = document.querySelectorAll(".counter-box");

// var number1 = parseInt(counter1);
// var number2 = parseInt(counter2);
// var number3 = parseInt(counter3);
// var number4 = parseInt(counter4);

// function increase1() {
//   setInterval(() => {
//     if (number1 < 300) {
//       number1 = number1 + 1;
//       document.querySelector(".counter1 span").textContent = number1;
//     }
//   }, 50);
// }
// function increase2() {
//   setInterval(() => {
//     if (number2 < 100) {
//       number2 = number2 + 1;
//       document.querySelector(".counter2 span").textContent = number2;
//     }
//   }, 50);
// }
// function increase3() {
//   setInterval(() => {
//     if (number3 < 100) {
//       number3 = number3 + 1;
//       document.querySelector(".counter3 span").textContent = number3;
//     }
//   }, 50);
// }
// function increase4() {
//   setInterval(() => {
//     if (number4 < 100) {
//       number4 = number4 + 1;
//       document.querySelector(".counter4 span").textContent = number4;
//     }
//   }, 50);
// }
// function increase() {
//   increase1();
//   increase2();
//   increase3();
//   increase4();
// }
// let options = {
//   root: null,
//   threshold: 0.5,
//   rootMargin: "0px"
// };
// const observer = new IntersectionObserver(function(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting === false) {
//       return;
//     } else {
//       increase();
//     }
//   });
// }, options);
// observerSections.forEach(o => observer.observe(o));
// let imgOptions = {
//   root: null,
//   threshold: 1,
//   rootMargin: "-100px"
// };
// const observerCoop = new IntersectionObserver(function(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting === false) {
//       return;
//     } else {
//       cooperateComImg.forEach(img => {
//         img.style.opacity = "1";
//       });
//     }
//   });
// }, imgOptions);
// cooperateComImg.forEach(img => {
//   observerCoop.observe(img);
// });

// Ali javascript here

var mama = document.getElementById("apam1");
var meimei = document.getElementById("baobao1");

mama.addEventListener("click", displayDate);

function displayDate() {
  meimei.classList.toggle("final");
}

mama.addEventListener("mouseleave", myScript2);

function myScript2() {
  meimei.classList.remove("final");
}

var mama1 = document.getElementById("apam2");
var meimei1 = document.getElementById("baobao2");

mama1.addEventListener("click", displayDate1);

function displayDate1() {
  meimei1.classList.add("final");
}

mama1.addEventListener("mouseleave", myScript);

function myScript() {
  meimei1.classList.remove("final");
}

var mama2 = document.getElementById("apam3");
var meimei2 = document.getElementById("baobao3");

mama2.addEventListener("click", displayDate2);
function displayDate2() {
  meimei2.classList.add("final");
}

mama2.addEventListener("mouseleave", myScript1);

function myScript1() {
  meimei2.classList.remove("final");
}

// const zhumu = document.getElementById("zhu1");
// zhumu.addEventListener("click", change);
// function change(){
//   zhumu.style.outline = "5px auto grey";
//   zhumu.style.outlineOffset = "-5px";

// }

// Wilson javascript here

/// next slide js next

var y = 1;
var imgs = document.querySelectorAll(".slide");
var dots2 = document.getElementById("slidescontain");
var bar1 = document.getElementsByClassName("bar");
var myVar1;

var btn1 = document.getElementById("r1");
var btn2 = document.getElementById("r2");
var btn3 = document.getElementById("r3");
// var btn4 = document.getElementById("r4");
// var btn5 = document.getElementById("r5");

btn1.addEventListener("mouseenter", firstbtn);
function firstbtn() {
  dots2.style.WebkitAnimation = "none";
  for (var i = 0; i < bar1.length; i++) {
    bar1[i].className = bar1[i].className.replace(" red", "");
  }
  intervalManager(false);

  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("addno");
  }

  x[1].classList.add("addno");
  x[2].classList.add("addno");
  // x[3].classList.add("addno");
  // x[4].classList.add("addno");

  document.getElementById("slidescontain").style.width = "100%";
  x[0].style.WebkitAnimation = "none";
  x[0].style.WebkitAnimation = "appear .6s";
  x[0].style.width = "100%";
}
btn1.addEventListener("mouseleave", firstbtnlev1);
function firstbtnlev1() {
  console.log("anwar");
  y = 1;

  intervalManager(true);
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("addno");
    // x[i].style.WebkitAnimation ="20s anwar infinite";
    x[i].style.width = "33.333%";
  }

  document.getElementById("slidescontain").style.width = "300%";
}

btn2.addEventListener("mouseenter", firstbtn1);
function firstbtn1() {
  dots2.style.WebkitAnimation = "none";
  for (var i = 0; i < bar1.length; i++) {
    bar1[i].className = bar1[i].className.replace(" red", "");
  }
  intervalManager(false);

  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("addno");
  }

  x[0].classList.add("addno");
  x[2].classList.add("addno");
  // x[3].classList.add("addno");
  // x[4].classList.add("addno");

  document.getElementById("slidescontain").style.width = "100%";
  x[1].style.WebkitAnimation = "none";
  x[1].style.WebkitAnimation = "appear .6s";
  x[1].style.width = "100%";
}
btn2.addEventListener("mouseleave", firstbtnlev2);
function firstbtnlev2() {
  intervalManager(true);
  y = 1;

  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("addno");
    // x[i].style.WebkitAnimation ="20s anwar infinite";
    x[i].style.width = "33.333%";
  }
  document.getElementById("slidescontain").style.width = "300%";
}
btn3.addEventListener("mouseenter", firstbtn2);
function firstbtn2() {
  dots2.style.WebkitAnimation = "none";

  for (var i = 0; i < bar1.length; i++) {
    bar1[i].className = bar1[i].className.replace(" red", "");
  }
  intervalManager(false);

  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("addno");
  }

  x[0].classList.add("addno");
  x[1].classList.add("addno");
  // x[3].classList.add("addno");
  // x[4].classList.add("addno");

  document.getElementById("slidescontain").style.width = "100%";
  x[2].style.WebkitAnimation = "none";
  x[2].style.WebkitAnimation = "appear .6s";
  x[2].style.width = "100%";
}
btn3.addEventListener("mouseleave", firstbtnlev4);
function firstbtnlev4() {
  intervalManager(true);
  y = 1;

  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("addno");
    x[i].style.width = "33.333%";
  }
  document.getElementById("slidescontain").style.width = "300%";
}
// btn4.addEventListener("mouseenter",firstbtn3);
// function firstbtn3(){

//   dots2.style.WebkitAnimation = "none";

//     for (var i = 0; i < bar1.length; i++) {
//       bar1[i].className = bar1[i].className.replace(" red", "");
//     }
//     intervalManager(false);

//     var x = document.getElementsByClassName("slide");
//     for (i = 0; i < x.length; i++) {
//         x[i].classList.remove("addno");
//       }

//     x[0].classList.add("addno");
//     x[1].classList.add("addno");
//     x[2].classList.add("addno");
//     x[4].classList.add("addno");

//     document.getElementById("slidescontain").style.width="100%";
//     x[3].style.WebkitAnimation = "none";
//     x[3].style.WebkitAnimation ="appear .6s";
//     x[3].style.width="100%";
// }
// btn4.addEventListener("mouseleave",firstbtnlev5);
// function firstbtnlev5(){
//   intervalManager(true);
//   y=1;
//   var x = document.getElementsByClassName("slide");
//   for (i = 0; i < x.length; i++) {
//       x[i].classList.remove("addno");
//       x[i].style.width="20%";
//   }
//   document.getElementById("slidescontain").style.width="500%";
// }

// btn5.addEventListener("mouseenter",firstbtn4);
// function firstbtn4(){
//   dots2.style.WebkitAnimation = "none";

//   for (var i = 0; i < bar1.length; i++) {
//     bar1[i].className = bar1[i].className.replace(" red", "");
//   }
//   intervalManager(false);

//     var x = document.getElementsByClassName("slide");
//     for (i = 0; i < x.length; i++) {
//         x[i].classList.remove("addno");
//       }

//     x[0].classList.add("addno");
//     x[1].classList.add("addno");
//     x[2].classList.add("addno");
//     x[3].classList.add("addno");

//     document.getElementById("slidescontain").style.width="100%";
//     x[4].style.WebkitAnimation = "none";
//     x[4].style.WebkitAnimation ="appear .6s";
//     x[4].style.width="100%";
// }
// btn5.addEventListener("mouseleave",firstbtnlev);
// function firstbtnlev(){
//   intervalManager(true);
//   y=1;
//   var x = document.getElementsByClassName("slide");
//   for (i = 0; i < x.length; i++) {
//       x[i].classList.remove("addno");
//       // x[i].style.WebkitAnimation ="20s anwar infinite";
//       x[i].style.width="20%";
//   }
//   document.getElementById("slidescontain").style.width="500%";

// }
/////under 500px
var slideIndex = 1;

if (window.matchMedia("(max-width: 500px)").matches) {
  var myVar;
  myFunction();
  showDivs(slideIndex);

  var i = 1;
}

function myFunction() {
  myVar = setInterval(myTimer, 2000);
}
function myTimer() {
  currentDiv(i);
  i++;

  if (i > 5) {
    i = 1;
  }
}

function myStopFunction() {
  clearInterval(myVar);
}

//dom manipulations

document.getElementById("btn-1").addEventListener("click", function() {
  console.log("me");
  myStopFunction();
  currentDiv(1);
});
document.getElementById("btn-2").addEventListener("click", function() {
  console.log("me");
  myStopFunction();
  currentDiv(2);
});
document.getElementById("btn-3").addEventListener("click", function() {
  console.log("me");
  myStopFunction();
  currentDiv(3);
});
// document.getElementById("btn-4").addEventListener("click", function(){
//   console.log('me');
//   myStopFunction();
//   currentDiv(4);
// });
// document.getElementById("btn-5").addEventListener("click", function(){
//   console.log('me');
//   myStopFunction();
//   currentDiv(5);
// });

document.getElementById("btnleft").addEventListener("click", function() {
  myStopFunction();

  plusDivs(-1);
  myFunction();
});

document.getElementById("btnright").addEventListener("click", function() {
  myStopFunction();

  plusDivs(1);
  myFunction();
});
function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;

  var x = document.getElementsByClassName("slide");
  var dots1 = document.getElementsByClassName("demo");

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].style.WebkitAnimation = "none";

    x[i].classList.remove("makingFlex");
  }

  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" red", "");
  }
  x[slideIndex - 1].classList.add("makingFlex");
  x[slideIndex - 1].style.display = "block";
  dots1[slideIndex - 1].className += " red";

  var text;

  if (slideIndex - 1 == 0) {
    text = "第一期毕业生";
  } else if (slideIndex - 1 == 1) {
    text = "第二期毕业生";
  } else {
    text = "第三期毕业生";
  }
  document.getElementById("dashtext").innerHTML = text;
}

//  if(slideIndex-1==0){
//   text="第一期毕业生"
// }else if(slideIndex-1==1){
//   text="第二期毕业生"
// }else if(slideIndex-1==2){

//   text="第三期毕业生"
// }else if(slideIndex-1==3){
//   text="第四期毕业生"
// }else{
//   text="第五期毕业生"
// }

var slideIndex1 = 1;
var intervalID = null;

if (window.matchMedia("(max-width: 500px)").matches) {
  intervalManager(false);
  console.log("anwar");
} else {
  intervalManager(true);
  console.log("amina");
}
function intervalManager(flag) {
  if (flag) {
    intervalID = setInterval(myTimer1, 4000);
  } else {
    clearInterval(intervalID);
  }
}
function myTimer1() {
  currentDiv1(y);
  y++;
  if (y > 3) {
    y = 1;
  }
}

function myStopFunction1() {
  clearInterval(myVar1);
  slideIndex1 = 1;
}

function currentDiv1(n) {
  showDivs1((slideIndex = n));
}

function showDivs1(n) {
  for (var i = 0; i < bar1.length; i++) {
    bar1[i].className = bar1[i].className.replace(" red", "");
  }
  bar1[slideIndex - 1].className += " red";
  if (y == 1) {
    dots2.style.WebkitAnimation = "f1 4s";
  } else if (y == 2) {
    dots2.style.WebkitAnimation = "f2 4s";
  } else {
    dots2.style.WebkitAnimation = "f3 4s";
  }

  // }else if(y==4){
  //   dots2.style.WebkitAnimation ="f4 4s";

  // }else{
  //   dots2.style.WebkitAnimation ="f5 4s";

  // }
}

// pan studentfeedback
$(document).ready(function() {
  $(".examples").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
});

var counter1 = document.querySelector(".counter1 span").innerHTML;
var counter2 = document.querySelector(".counter2 span").innerHTML;
var observerSections = document.querySelectorAll(".counter-box");

var number1 = parseInt(counter1);
var number2 = parseInt(counter2);

function increase1() {
  setInterval(() => {
    if (number1 < 1500) {
      number1 = number1 + 1;
      document.querySelector(".counter1 span").textContent = number1;
    }
  }, 50);
}
function increase2() {
  setInterval(() => {
    if (number2 < 100) {
      number2 = number2 + 1;
      document.querySelector(".counter2 span").textContent = number2;
    }
  }, 50);
}

function increase() {
  increase1();
  increase2();
}

let options = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting === false) {
      return;
    } else {
      increase();
    }
  });
}, options);

observerSections.forEach(o => observer.observe(o));

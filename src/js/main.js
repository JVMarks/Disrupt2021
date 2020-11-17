/*MENU SCROLL*/
const menuItems = document.querySelectorAll('#menu .link');
function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 80;/*80*/
  scrollToPosition(to);
}

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  })
  smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};

/*animation*/
var animation = document.getElementById("box");
animation.style.webkitAnimationPlayState = "paused";
var stars = document.getElementById("starsContainer");
stars.style.webkitAnimationPlayState = "paused";
var craters = document.getElementById("cratersContainer");
craters.style.webkitAnimationPlayState = "paused";

var trigger = document.getElementById("box");
trigger.addEventListener('click', animationStart);

function animationStart() {
  var animation = document.getElementById("box");
  var divAnimation = document.getElementById("animationContainer");
  var textGoner = document.getElementById("clickMe");
  var stars = document.getElementById("starsContainer");
  var craters = document.getElementById("cratersContainer");
  craters.style.webkitAnimationPlayState = "running";
  stars.style.webkitAnimationPlayState = "running";
  textGoner.style.display = "none";
  divAnimation.style.webkitAnimationPlayState = "running";
  animation.style.webkitAnimationPlayState = "running";
  animation.style.cursor = "default";
}

//PLACES
var tab1 = document.getElementById("tabContainer1");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

button1.addEventListener('click', showContent1);
button2.addEventListener('click', showContent2);
button3.addEventListener('click', showContent3);
button4.addEventListener('click', showContent4);

function showContent1() {
  var tab1 = document.getElementById("tabContainer1");
  var tab2 = document.getElementById("tabContainer2");
  var tab3 = document.getElementById("tabContainer3");
  var tab4 = document.getElementById("tabContainer4");
  tab1.style.display = "block";
  tab2.style.display = "none";
  tab3.style.display = "none";
  tab4.style.display = "none";
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var button4 = document.getElementById("button4");
  button1.style.backgroundColor = "black";
  button2.style.backgroundColor = "#343538";
  button3.style.backgroundColor = "#343538";
  button4.style.backgroundColor = "#343538";
}

function showContent2() {
  var tab1 = document.getElementById("tabContainer1");
  var tab2 = document.getElementById("tabContainer2");
  var tab3 = document.getElementById("tabContainer3");
  var tab4 = document.getElementById("tabContainer4");
  tab3.style.display = "none"
  tab1.style.display = "none";
  tab2.style.display = "block";
  tab4.style.display = "none";
  button1.style.backgroundColor = "#343538";
  button2.style.backgroundColor = "black";
  button3.style.backgroundColor = "#343538";
  button4.style.backgroundColor = "#343538";

}

function showContent3() {
  var tab1 = document.getElementById("tabContainer1");
  var tab2 = document.getElementById("tabContainer2");
  var tab3 = document.getElementById("tabContainer3");
  var tab4 = document.getElementById("tabContainer4");
  tab1.style.display = "none";
  tab2.style.display = "none";
  tab3.style.display = "block";
  tab4.style.display = "none";
  button1.style.backgroundColor = "#343538";
  button2.style.backgroundColor = "#343538";
  button3.style.backgroundColor = "black";
  button4.style.backgroundColor = "#343538";

}

function showContent4() {
  var tab1 = document.getElementById("tabContainer1");
  var tab2 = document.getElementById("tabContainer2");
  var tab3 = document.getElementById("tabContainer3");
  var tab4 = document.getElementById("tabContainer4");
  tab1.style.display = "none";
  tab2.style.display = "none";
  tab3.style.display = "none";
  tab4.style.display = "block";
  button1.style.backgroundColor = "#343538";
  button2.style.backgroundColor = "#343538";
  button3.style.backgroundColor = "#343538";
  button4.style.backgroundColor = "black";

}
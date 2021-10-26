const colors = ["#E5F5F5", "#DBD8F6", "#F4DBEB", "#F1F8DC"];

let count = 0;

if (count > 4) {
    count = 0;
}

$('.right').click(function() {
    count = count + 1;
    if (count > 3) {
        count = count - 1;
    }
    $('.secB___container.active').next().addClass("active");
    $('.secB___container.active').prev().removeClass("active");
    $('.secB___page>div.active').next().addClass("active");
    $('.secB___page>div.active').prev().removeClass("active");
    $('.secB').css('backgroundColor',colors[count]);
})

$('.left').click(function() {
    count = count - 1;
    if (count < 0) {
        count = count + 1;
    }
    $('.secB___container.active').prev().addClass("active");
    $('.secB___container.active').next().removeClass("active");
    $('.secB___page>div.active').prev().addClass("active");
    $('.secB___page>div.active').next().removeClass("active");
    $('.secB').css('backgroundColor',colors[count]);
})

$('.xi-bars').click(function() {
    $('.nav').toggleClass("active");
    $('.nav___ul').toggleClass("active");
    $('.overlay').toggleClass("active");
})

document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
         event.preventDefault(); 
       } 
   }, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
         event.preventDefault(); 
       } lastTouchEnd = now; 
   }, false);
const colors = ["#E5F5F5", "#DBD8F6", "#F4DBEB", "#F1F8DC"];

$('.right').click(function() {
    $('.secB___container.active').next().addClass("active");
    $('.secB___container.active').prev().removeClass("active");
    $('.secB___page>div.active').next().addClass("active");
    $('.secB___page>div.active').prev().removeClass("active");
})

$('.left').click(function() {
    $('.secB___container.active').prev().addClass("active");
    $('.secB___container.active').next().removeClass("active");
    $('.secB___page>div.active').prev().addClass("active");
    $('.secB___page>div.active').next().removeClass("active");
})

$('.xi-bars').click(function() {
    $('.nav').toggleClass("active");
    $('.nav___ul').toggleClass("active");
    $('.overlay').toggleClass("active");
})
!(function () {
    "use strict";

    $(".conteudo-ancora").click(function (e) {
        if ((e.preventDefault(), $(this).attr("href"))) {
            var t = $(this).attr("href");
            console.log("id = ", t);
            var r = $(t).offset().top - 130;
            console.log("id = ", r), $("html, body").animate({ scrollTop: r }, 500);
        }
    });

    $('.hamburger').click(function (){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    })

})();

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
        }
    });
});






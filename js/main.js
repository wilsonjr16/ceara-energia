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

document.addEventListener("DOMContentLoaded", function () {
    const inputTel = document.getElementById("inputTel");

    inputTel.addEventListener("input", function (event) {
      let value = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
      if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

      let formattedValue = "";
      if (value.length > 0) formattedValue = `(${value.slice(0, 2)}`;
      if (value.length > 2) formattedValue += `) ${value.slice(2, 7)}`;
      if (value.length > 7) formattedValue += `-${value.slice(7)}`;

      event.target.value = formattedValue;
    });
  });




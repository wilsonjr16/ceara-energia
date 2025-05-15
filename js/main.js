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

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
  });
});

function animarContador(contador) {
    const valorFinal = +contador.getAttribute('data-valor');
    let valorAtual = 0;
    const duracao = 3000;
    const incremento = valorFinal / (duracao / 30);

    const atualizar = () => {
      valorAtual += incremento;
      if (valorAtual < valorFinal) {
        contador.textContent = Math.floor(valorAtual);
        requestAnimationFrame(atualizar);
      } else {
        contador.textContent = valorFinal;
      }
    };

    atualizar();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.contador');

    const observer = new IntersectionObserver((entradas, observer) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          const contador = entrada.target;
          animarContador(contador);
          observer.unobserve(contador); // Anima só uma vez
        }
      });
    }, {
      threshold: 0.5 // dispara quando 50% do elemento está visível
    });

    contadores.forEach(contador => {
      observer.observe(contador);
    });
  });





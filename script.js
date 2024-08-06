window.addEventListener("load", function() {
    // Adiciona animação de entrada para a imagem do perfil
    anime({
        targets: '#profile-img',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: 500
    });

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    });

    // Inicializa ScrollReveal
    ScrollReveal().reveal('.reveal', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-in-out',
        reset: true // Para animar sempre que o elemento aparecer na tela
    });

    // Adiciona animação de entrada para os parágrafos
    anime({
        targets: '.about-section p',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100)
    });
});
// ScrollReveal().reveal('.about-section h2', { delay: 200, distance: '50px', origin: 'bottom' });
// ScrollReveal().reveal('#profile-img', { delay: 400, distance: '50px', origin: 'bottom' });
// ScrollReveal().reveal('.about-section p', { delay: 600, distance: '50px', origin: 'bottom', interval: 100 });

//BOTÃO DE SAIBA MAIS PARA MOSTRAR O PARÁGRAFO:
// Função para mostrar/ocultar parágrafo
function toggleParagrafo() {
    var paragrafo = document.getElementById("paragrafo");

    if (paragrafo.style.display === "none" || paragrafo.style.display === "") {
        paragrafo.style.display = "block";
        paragrafo.style.opacity = "1"; /* Torna o texto visível com efeito de fade-in */
        document.getElementById("saibaMaisBtn").innerText = "Ocultar";
    } else {
        paragrafo.style.opacity = "0"; /* Torna o texto invisível com efeito de fade-out */
        setTimeout(() => {
            paragrafo.style.display = "none";
        }, 500); /* Aguarda 500ms antes de ocultar o texto para permitir a conclusão do efeito de fade-out */
        document.getElementById("saibaMaisBtn").innerText = "Saiba Mais";
    }
}

function redirectToWhatsApp() {
    const mensagem = 'Olá! Vim pelo site e gostaria de agendar uma consulta.';
    const urlWhatsApp = `https://wa.me/5583991450878/?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank');
}

function redirectToInstagram() {
    window.open('https://www.instagram.com/institutorabeloodonto/', '_blank');
}

function redirectToAddress() {
    window.open('https://www.google.com/maps/dir//Instituto+Rabelo+-+Liv+Mall+Shopping/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x7acdd0a7b1e17a5:0x699afb0bcc7c2ead?sa=X&ved=2ahUKEwjD_veJy-6CAxUmgGEGHftODpEQ9Rd6BAgsEAA&cshid=1701995510123878', '_blank');
}




//Animações tela de contato
document.addEventListener("DOMContentLoaded", function() {
  const contactItems = document.querySelectorAll('.contact-item');

  contactItems.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('active');
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const contactItems = document.querySelectorAll('.contact-item');

  contactItems.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('active');
      });

      item.addEventListener('mouseover', () => {
          const icon = item.querySelector('i');
          icon.style.transform = 'rotate(360deg)';
      });

      item.addEventListener('mouseout', () => {
          const icon = item.querySelector('i');
          icon.style.transform = 'rotate(0deg)';
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const contactItems = document.querySelectorAll('.contact-item');

  contactItems.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('active');
      });

      item.addEventListener('mouseover', () => {
          const icon = item.querySelector('i');
          icon.style.transform = 'rotate(360deg)';
      });

      item.addEventListener('mouseout', () => {
          const icon = item.querySelector('i');
          icon.style.transform = 'rotate(0deg)';
      });
  });
});


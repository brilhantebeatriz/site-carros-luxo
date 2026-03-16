// texto com animacao "pq a vicenza"
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
});
const elemento = document.querySelector('.pqAVicenza');
observer.observe(elemento);

// intro preto vicenza
window.addEventListener('load', () => {
  const animacaoIntro = document.getElementById('animacaointro');
  const video = document.getElementById('video-fundo');

  setTimeout(() => {
    video.classList.add('mostrar');
    animacaoIntro.classList.add('sair');

    animacaoIntro.addEventListener('transitionend', () => {
      animacaoIntro.style.display = 'none';
    }, { once: true });

  }, 2000);
});

// transição suave ao clicar na mensagem
const mensagemBotao = document.querySelector('.mensagemVemOuNao');

mensagemBotao.addEventListener('click', function (e) {
  e.preventDefault();

  // Cria efeito de fade-out
  document.body.style.transition = 'opacity 0.8s ease';
  document.body.style.opacity = '0';

  setTimeout(() => {
    window.location.href = 'siteCompras.html';
  }, 800);
});


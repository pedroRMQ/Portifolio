const projetosButtons = document.querySelectorAll('.projetos-btn');
const modal = document.getElementById('projetos-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');
const imagemSaibaMais = document.getElementById('imagem');

const projetosDetails = {
  proj1: {
    title: 'Mentes em Jogo',
    description: 'Um tabuleiro com foco na inclusão de crinças de 8 a 12 anos no espectro autista. Esse tabuleiro usa o arduino para mostrar o dado e os desafios que o jogadore deve fazer, além de mostrar onde o jogador está por meio de leds.',
    imagem:'Downloads/Tabuleiro.jpeg'
},
  proj2: {
    title: 'Aplicativo fitness',
    description: 'Um aplicativo fitness para registro de treinos de crossfit, podendo filtrar treinos e visualizar treinos antigos, além de se poder adicionar metas, foi utilizado o biblioteca "tkinter" do python para fazer a parte gráfica.',
    imagem:'Downloads/Tabuleiro.jpeg'
  }
};

projetosButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projetosId = button.getAttribute('data-projetos');
    modalTitle.textContent = projetosDetails[projetosId].title;
    modalDescription.textContent = projetosDetails[projetosId].description;
    imagemSaibaMais.src  = projetosDetails[projetosId].imagem;
    modal.style.display = 'grid';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
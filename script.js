document.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("theme") === "dark";
  
    const applyTheme = (darkMode) => {
      document.body.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
      toggleBtn.textContent = darkMode ? "Modo Claro" : "Modo Escuro";
    };

    const toggleBtn = document.createElement("button");
    toggleBtn.id = "toggle-dark-mode";
    toggleBtn.style.display = "none"; 
    document.body.appendChild(toggleBtn);
  
    applyTheme(isDark);
    toggleBtn.style.display = "block";
  
    toggleBtn.addEventListener("click", () => {
      const darkMode = !document.body.classList.contains("dark");
      applyTheme(darkMode);
    });
  
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll(".menu a").forEach(link => {
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPath || (linkPath === "index.html" && currentPath === "")) {
        link.classList.add("ativo");
      } else {
        link.classList.remove("ativo");
      }
    });
  });

const projetosButtons = document.querySelectorAll('.projetos-btn');
const modal = document.getElementById('projetos-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');
const imagem1 = document.getElementById('imagem1');
const imagem2 = document.getElementById('imagem2');
const imagem3 = document.getElementById('imagem3');
const imagem4 = document.getElementById('imagem4');
const imagem5 = document.getElementById('imagem5');
let count = 1;
document.getElementById("radio1").checked = true;

const projetosDetails = {
  proj1: {
    title: 'Mentes em Jogo',
    description: 'Um tabuleiro com foco na inclusão de crinças de 8 a 12 anos no espectro autista. Esse tabuleiro usa o arduino para mostrar o dado e os desafios que o jogadore deve fazer, além de mostrar onde o jogador está por meio de leds.',
    imagem1:'imagens\\Tabuleiro.jpeg',
    imagem2:'imagens\\Tabuleiro.jpeg',
    imagem3:'imagens\\Tabuleiro.jpeg',
    imagem4:'imagens\\Tabuleiro.jpeg',
    imagem5:'imagens\\Tabuleiro.jpeg'
},
  proj2: {
    title: 'Aplicativo fitness',
    description: 'Um aplicativo fitness para registro de treinos de crossfit com sistema de cadastro e login, podendo filtrar treinos e visualizar treinos antigos, além de se poder adicionar metas, foi utilizado o biblioteca "tkinter" do python para fazer a parte gráfica.',
    imagem1:'imagens\\novoLoginNovo.jpg',
    imagem2:'imagens\\novoCadastroNovo.jpg',
    imagem3:'imagens\\novoTelaInicial.jpg',
    imagem4:'imagens\\NovoTreinos.jpg',
    imagem5:'imagens\\novoVisualizar.jpg'
  }
};

projetosButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projetosId = button.getAttribute('data-projetos');
    modalTitle.textContent = projetosDetails[projetosId].title;
    modalDescription.textContent = projetosDetails[projetosId].description;
    imagem1.src  = projetosDetails[projetosId].imagem1;
    imagem2.src  = projetosDetails[projetosId].imagem2;
    imagem3.src  = projetosDetails[projetosId].imagem3;
    imagem4.src  = projetosDetails[projetosId].imagem4;
    imagem5.src  = projetosDetails[projetosId].imagem5;
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

setInterval(function(){
  nextImage();
},2000);

function nextImage(){
  count++;

  if(count > 5){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;
}
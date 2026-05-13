// scripts petshop

document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || email == "" || !mensagem) {
    alert("Preencha todos os campos!");
    return;
  }else {
    alert("Mensagem enviada com sucesso!");
  }
  this.reset();
});

// ****************************************** // 

let botaoMenu = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

// ****************************************** //
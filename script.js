const body = document.body;
body.onload = carregarPersonagens();

function carregarPersonagens(){
  pegarPersonagem(1);
  pegarPersonagem(2);
  pegarPersonagem(3);
  pegarPersonagem(4);
}

function gerarValorAleatorio(){
  return Math.floor(Math.random() * 671);
};

function pegarPersonagem(numeroImagem){
  let numeroAleatorio = gerarValorAleatorio();
  fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('imagem' + numeroImagem).src = data.image;
      document.getElementById('nome-personagem' + numeroImagem).innerHTML = data.name;
    });
}

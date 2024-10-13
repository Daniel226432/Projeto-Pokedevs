

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");



listaSelecaoPokedevs.forEach(pokedev => {
   pokedev.addEventListener("click", () => {
      escoderCartaoPokedev();
      const idPokedevSelecionado = mostrarCartaopokedev(pokedev);
      desativarPokedevNaListagem();

      ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

   })

})



function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
   const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
   pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
   const pokedevAtivoNaListagem = document.querySelector(".ativo");
   pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaopokedev(pokedev) {
   const idPokedevSelecionado = pokedev.attributes.id.value;
   const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
   const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
   cartaoPokedevParaAbrir.classList.add("aberto");
   return idPokedevSelecionado;
}

function escoderCartaoPokedev() {
   const cartaoPokedevAberto = document.querySelector(".aberto");
   cartaoPokedevAberto.classList.remove("aberto");
}


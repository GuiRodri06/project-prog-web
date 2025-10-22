const form = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // impede o envio "real" do formulário

  form.reset(); // limpa os campos

  mensagemSucesso.style.display = 'block'; // mostra a mensagem

  // opcional: esconde após 5 segundos
  setTimeout(() => {
    mensagemSucesso.style.display = 'none';
  }, 5000);
});

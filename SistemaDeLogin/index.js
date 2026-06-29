// Define o email correto que será usado para a validação do login
const usuarioCorreto = 'gbxnr@gmail.com';

// Define a senha correta que será usada na validação do login
const senhaCorreta = '123456';

// Pega o botão de entrar pelo ID definido no HTML
const botao = document.getElementById('btnEntrar');

// Adiciona um evento ao botão para escutar cliques
botao.addEventListener('click', () => {
  // Mostra no console apenas para confirmar que o clique aconteceu
  console.log('clicou');

  // Pega os valores digitados nos campos de email e senha
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Pega o elemento onde vamos mostrar o resultado do login
  const resultado = document.getElementById('resultado');

  // Compara os valores digitados com os valores corretos
  if (email === usuarioCorreto && senha === senhaCorreta) {
    console.log('liberado');
    resultado.textContent = 'Acesso liberado';
  } else {
    console.log('negado');
    resultado.textContent = 'Acesso negado';
  }
});
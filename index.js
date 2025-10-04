// 1. Importa o pacote express que acabamos de instalar
const express = require('express');

// 2. Inicia o express e o armazena na constante 'app'
 const app = express();

// 3. Define a porta em que nosso servidor vai rodar
const PORT = 3000;

// 4. Define uma "rota". Quando alguém acessar a página inicial ('/'), enviaremos uma resposta com a mensagem abaixo.
app.get('/', (req, res) => {
	res.send('Olá, Mundo! Esta é minha primeira aplicação Node.js para o projeto!');
});

// 5. Inicia o servidor para que ele comece a "ouvir" por acessos na porta definida.
app.listen(PORT, () => {
	console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});

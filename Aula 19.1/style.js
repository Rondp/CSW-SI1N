document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter os valores do formulário
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de autenticação
    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido!');
        // Aqui você pode redirecionar o usuário para outra página
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
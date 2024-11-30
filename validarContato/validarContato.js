function submitContato() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    let validar = true;
    const emailVerify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Uma maluquice que verifica email

    if (!username || !email || !phoneNumber) {
        alert('Preencha todos os campos!');
        validar = false;
    }

    else if (!emailVerify.test(email)) {
        alert('Por favor, insira um email válido!');
        validar = false;
    }

    if (validar) {
        alert(`
            Contato enviado com sucesso!
            Nome: ${username}
            Email: ${email}
            Número de telefone: ${phoneNumber}    
            `);
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phoneNumber').value = '';
    }
}
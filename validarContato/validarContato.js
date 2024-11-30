function submitContato() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    let validar = true;
    const usernameVerify = /([0-9_&\-\.\,@']+)/g; // Uma maluquice que verifica nome
    const emailVerify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Outra maluquice pra email
    const phoneVerify = /^(\(?\d{2}\)?\s?)?\d{4,5}[-]?\d{4}$/; // Essa aqui nn pede por "+55"


    if (!username || !email || !phoneNumber) {
        alert('Preencha todos os campos!');
        validar = false;
    }

    else if (usernameVerify.test(username)){
        alert('Por favor, insira um nome válido!');
        validar = false;
    }

    else if (!emailVerify.test(email)) {
        alert('Por favor, insira um email válido!');
        validar = false;
    }

    else if (!phoneVerify.test(phoneNumber)) {
        alert('Por favor, insira um número válido!');
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
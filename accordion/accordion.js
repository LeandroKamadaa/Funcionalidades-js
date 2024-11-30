document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const textElement = document.getElementById(targetId);
  
      // Alterna a visibilidade do texto
      if (textElement.style.display === 'block') {
        textElement.style.display = 'none';
        button.textContent = '>'; // Muda para o símbolo ">"
      } else {
        textElement.style.display = 'block';
        button.textContent = 'v'; // Muda para o símbolo "v"
      }
    });
  });
  
// Função para atualizar o relógio dinâmico
function updateClock() {
    const now = new Date();
    
    // Formatar a hora (ex: 14:30:45)
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('clock-time').textContent = now.toLocaleTimeString('pt-BR', timeOptions);
    
    // Formatar a data (ex: Sexta-feira, 20 de outubro)
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('clock-date').textContent = now.toLocaleDateString('pt-BR', dateOptions);
}

// Configurar o ano atual no footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Iniciar o relógio e atualizar a cada segundo (1000 ms)
updateClock();
setInterval(updateClock, 1000);
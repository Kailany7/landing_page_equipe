
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada.`);
    this.reset();
});

// Função simples para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});


const fotoPerfil = document.querySelector('.foto-perfil');
fotoPerfil.addEventListener('mouseenter', () => {
    fotoPerfil.style.transform = 'scale(1.1) rotate(3deg)';
    fotoPerfil.style.transition = 'transform 0.5s ease';
});
fotoPerfil.addEventListener('mouseleave', () => {
    fotoPerfil.style.transform = 'scale(1) rotate(0deg)';
});

document.querySelectorAll('.btn-projeto').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault(); 
        window.open(btn.href, '_blank');
    });
});

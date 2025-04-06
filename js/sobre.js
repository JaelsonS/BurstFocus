document.addEventListener('DOMContentLoaded', function() {
    const botaoMenu = document.querySelector('.botao-menu-mobile');
    const navegacao = document.querySelector('.navegacao-principal');
    botaoMenu.addEventListener('click', function() {
        navegacao.classList.toggle('mobile-ativo');
        const icone = this.querySelector('i');
        if (navegacao.classList.contains('mobile-ativo')) {
            icone.classList.remove('fa-bars');
            icone.classList.add('fa-times');
        } else {
            icone.classList.remove('fa-times');
            icone.classList.add('fa-bars');
        }
    });
    
    const linksMenu = document.querySelectorAll('.navegacao-principal a');
    linksMenu.forEach(link => {
        link.addEventListener('click', function() {
            if (navegacao.classList.contains('mobile-ativo')) {
                navegacao.classList.remove('mobile-ativo');
                const icone = botaoMenu.querySelector('i');
                icone.classList.remove('fa-times');
                icone.classList.add('fa-bars');
            }
        });
    });
});
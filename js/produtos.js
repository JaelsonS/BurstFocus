document.addEventListener('DOMContentLoaded', function() {
    const botoesPergunta = document.querySelectorAll('.botao-pergunta');
    
    botoesPergunta.forEach(botao => {
        botao.addEventListener('click', function() {
            this.classList.toggle('ativo');
            const resposta = this.nextElementSibling;
            
            if (this.classList.contains('ativo')) {
                resposta.classList.add('aberta');
            } else {
                resposta.classList.remove('aberta');
            }
            
            botoesPergunta.forEach(outroBotao => {
                if (outroBotao !== botao && outroBotao.classList.contains('ativo')) {
                    outroBotao.classList.remove('ativo');
                    outroBotao.nextElementSibling.classList.remove('aberta');
                }
            });
        });
    });
    
    const depoimentos = document.querySelectorAll('.depoimento');
    let depoimentoAtual = 0;
    
    function mostrarDepoimento(n) {
        depoimentos.forEach(depoimento => depoimento.classList.remove('ativo'));
        depoimentoAtual = (n + depoimentos.length) % depoimentos.length;
        depoimentos[depoimentoAtual].classList.add('ativo');
    }
    
    setInterval(() => {
        mostrarDepoimento(depoimentoAtual + 1);
    }, 5000);
});
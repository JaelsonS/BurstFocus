document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    menuMobile.addEventListener('click', function() {
        menu.classList.toggle('mobile-ativo');
        menuMobile.classList.toggle('ativo');
        document.body.style.overflow = menu.classList.contains('mobile-ativo') ? 'hidden' : '';
    });
    
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('mobile-ativo');
            menuMobile.classList.remove('ativo');
            document.body.style.overflow = '';
        });
    });
    
    const botoesHumor = document.querySelectorAll('.botao-humor');
    const respostaHumor = document.getElementById('respostaHumor');
    const sugestaoVideo = document.getElementById('sugestaoVideo');
    const containerVideo = document.getElementById('containerVideo');
    const pularVideo = document.getElementById('pularVideo');
    const respostas = {
        
        feliz: {
            mensagem: "Que ótimo que você está feliz! Aproveite essa energia positiva para ser produtivo hoje. Lembre-se: 'A felicidade não é algo pronto. Ela vem das suas próprias ações.' - Dalai Lama",
            video: "https://www.youtube.com/embed/HAnw168huqA"
        },
        normal: {
            mensagem: "Dias normais são perfeitos para estabelecer rotinas. Que tal experimentar a Técnica Pomodoro? Trabalhe por 25 minutos, descanse 5. 'A disciplina é a ponte entre metas e realizações.' - Jim Rohn",
            video: "https://www.youtube.com/embed/7XFLTDQ4JMk"
        },
        triste: {
            mensagem: "Sinto muito que você esteja se sentindo assim. Lembre-se: 'Isso também passará'. Tente fazer uma pequena caminhada ou ouvir sua música favorita. 'A dor que você sente hoje será a força que você sentirá amanhã.'",
            video: "https://www.youtube.com/embed/4q1dgn_C0AU"
        },
        ansioso: {
            mensagem: "Ansiedade é comum para mentes brilhantes. Tente a técnica 4-7-8: inspire por 4s, segure por 7s, expire por 8s. 'Você não pode controlar as ondas, mas pode aprender a surfar.' - Jon Kabat-Zinn",
            video: "https://www.youtube.com/embed/arj7oStGLkU"
        },
        desmotivado: {
            mensagem: "A desmotivação é temporária. Comece com tarefas pequenas e simples para criar impulso. 'O segredo para seguir em frente é começar.' - Mark Twain",
            video: "https://www.youtube.com/embed/KM4Xe6Dlp0Y"
        }
    };
    
    botoesHumor.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesHumor.forEach(btn => {
                btn.classList.remove('ativo');
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
            });
            
            const humor = this.getAttribute('data-humor');
            const resposta = respostas[humor];
            respostaHumor.innerHTML = `<p>${resposta.mensagem}</p>`;
            setTimeout(() => {
                sugestaoVideo.style.display = 'block';
                containerVideo.innerHTML = `
                    <iframe width="100%" height="315" src="${resposta.video}" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                `;
                sugestaoVideo.scrollIntoView({ behavior: 'smooth' });

                setTimeout(mostrarAnuncio, 180000); 
            }, 3000);
        });
    });
    
    pularVideo.addEventListener('click', function() {
        sugestaoVideo.style.display = 'none';
        mostrarAnuncio();
    });
 
    
    function mostrarAnuncio() {
        const anuncioHTML = `
            <div class="anuncio-produto">
                <h3>Quer levar seu foco para o próximo nível?</h3>
                <p>Conheça nosso curso "Foco Explosivo em 30 Dias" com técnicas exclusivas para TDAH</p>
                
                <div class="produto-anuncio">
                    <img src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Curso Foco Explosivo">
                    <div class="info-produto">
                        <h4>Foco Explosivo em 30 Dias</h4>
                        <p>Método completo para reprogramar seu cérebro</p>
                        <div class="preco-anuncio">
                            <span class="preco-original">De R$ 497,00</span>
                            <span class="preco-promocional">Por R$ 197,00</span>
                        </div>
                        <a href="produtos.html" class="botao botao-primario">Quero Meu Acesso</a>
                    </div>
                </div>
            </div>
        `;
        
        respostaHumor.insertAdjacentHTML('afterend', anuncioHTML);
        document.querySelector('.anuncio-produto').scrollIntoView({ behavior: 'smooth' });
    }
    
    const depoimentos = document.querySelectorAll('.depoimento');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    let depoimentoAtual = 0;
    function mostrarDepoimento(n) {
        depoimentos.forEach(depoimento => depoimento.classList.remove('ativo'));
        depoimentoAtual = (n + depoimentos.length) % depoimentos.length;
        depoimentos[depoimentoAtual].classList.add('ativo');
    }
    function iniciarCarrossel() {
        intervaloCarrossel = setInterval(proximoDepoimento, 80000);
    }
    btnAnterior.addEventListener('click', () => {
        mostrarDepoimento(depoimentoAtual - 1);
    });
    
    btnProximo.addEventListener('click', () => {
        mostrarDepoimento(depoimentoAtual + 1);
    });
    
    setInterval(() => {
        mostrarDepoimento(depoimentoAtual + 1);
    }, 8000);
    window.addEventListener('scroll', function() {
        const cabecalho = document.querySelector('.cabecalho');
        if (window.scrollY > 50) {
            cabecalho.style.padding = '10px 0';
            cabecalho.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            cabecalho.style.padding = '15px 0';
            cabecalho.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});

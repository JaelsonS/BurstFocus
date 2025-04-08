document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    menuMobile.addEventListener('click', function() {
        this.classList.toggle('ativo');
        menu.classList.toggle('mobile-ativo');
        
        // Atualiza o atributo aria-expanded
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        
        // Bloqueia o scroll quando o menu está aberto
        if (menu.classList.contains('mobile-ativo')) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
        }
    });
    
    // Fecha o menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('mobile-ativo');
            menuMobile.classList.remove('ativo');
            menuMobile.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            document.body.style.position = '';
        });
    });
    
    // Verificação de Humor
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
    
    const anunciosPersonalizados = {
        feliz: {
            titulo: "Aproveite sua energia positiva!",
            descricao: "Curso 'Produtividade no Fluxo' - Aprenda a canalizar sua felicidade em resultados extraordinários",
            imagem: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            precoOriginal: "R$ 497,00",
            precoPromocional: "R$ 297,00",
            link: "produtos.html#feliz"
        },
        normal: {
            titulo: "Transforme sua rotina!",
            descricao: "Kit 'Hábitos de Alta Performance' - Para quem quer evoluir sem sair da zona de conforto",
            imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            precoOriginal: "R$ 397,00",
            precoPromocional: "R$ 197,00",
            link: "produtos.html#normal"
        },
        triste: {
            titulo: "Recupere sua motivação!",
            descricao: "Programa 'Reinício Produtivo' - Técnicas para superar momentos difíceis e retomar o controle",
            imagem: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            precoOriginal: "R$ 357,00",
            precoPromocional: "R$ 157,00",
            link: "produtos.html#triste"
        },
        ansioso: {
            titulo: "Acalme a mente e produza mais!",
            descricao: "Método 'Foco sem Ansiedade' - Como ser produtivo sem se sabotar",
            imagem: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            precoOriginal: "R$ 427,00",
            precoPromocional: "R$ 227,00",
            link: "produtos.html#ansioso"
        },
        desmotivado: {
            titulo: "Reacenda seu ânimo!",
            descricao: "Desafio '30 Dias de Propósito' - Redescubra sua motivação e energia criativa",
            imagem: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            precoOriginal: "R$ 367,00",
            precoPromocional: "R$ 167,00",
            link: "produtos.html#desmotivado"
        }
    };
    
    function mostrarAnuncio(humor) {
        const anuncio = anunciosPersonalizados[humor] || anunciosPersonalizados.normal;
        
        const anuncioHTML = `
            <div class="anuncio-produto">
                <h3>${anuncio.titulo}</h3>
                <p>${anuncio.descricao}</p>
                
                <div class="produto-anuncio">
                    <img src="${anuncio.imagem}" alt="${anuncio.titulo}" loading="lazy">
                    <div class="info-produto">
                        <h4>${anuncio.titulo.split('!')[0]}</h4>
                        <p>${anuncio.descricao.split(' - ')[1]}</p>
                        <div class="preco-anuncio">
                            <span class="preco-original">De ${anuncio.precoOriginal}</span>
                            <span class="preco-promocional">Por ${anuncio.precoPromocional}</span>
                        </div>
                        <a href="${anuncio.link}" class="botao botao-primario">Quero Meu Acesso</a>
                    </div>
                </div>
            </div>
        `;
        
        const anuncioExistente = document.querySelector('.anuncio-produto');
        if (anuncioExistente) {
            anuncioExistente.remove();
        }
        
        respostaHumor.insertAdjacentHTML('afterend', anuncioHTML);
        
        document.querySelector('.anuncio-produto').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
    
    botoesHumor.forEach(botao => {
        botao.addEventListener('click', function() {
            botoesHumor.forEach(btn => btn.classList.remove('ativo'));
            
            this.classList.add('ativo');
            
            const humor = this.getAttribute('data-humor');
            const resposta = respostas[humor];
            
            respostaHumor.innerHTML = `<p>${resposta.mensagem}</p>`;
            
            setTimeout(() => {
                sugestaoVideo.style.display = 'block';
                containerVideo.innerHTML = `
                    <iframe width="100%" height="315" src="${resposta.video}?rel=0&modestbranding=1" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                `;
                
                sugestaoVideo.scrollIntoView({ behavior: 'smooth' });

                setTimeout(() => mostrarAnuncio(humor), 1000); 
            }, 3000);
        });
    });
    
    pularVideo.addEventListener('click', function(e) {
        e.preventDefault();
        sugestaoVideo.style.display = 'none';
        containerVideo.innerHTML = '';
        
        const humorAtivo = document.querySelector('.botao-humor.ativo')?.getAttribute('data-humor') || 'normal';
        mostrarAnuncio(humorAtivo);
    });
    
    // Carrossel de Depoimentos
    const depoimentos = document.querySelectorAll('.depoimento');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    let depoimentoAtual = 0;
    let intervaloCarrossel;
    
    function mostrarDepoimento(n) {
        depoimentos.forEach(depoimento => depoimento.classList.remove('ativo'));
        depoimentoAtual = (n + depoimentos.length) % depoimentos.length;
        depoimentos[depoimentoAtual].classList.add('ativo');
        reiniciarIntervalo();
    }
    
    function proximoDepoimento() {
        mostrarDepoimento(depoimentoAtual + 1);
    }
    
    function reiniciarIntervalo() {
        clearInterval(intervaloCarrossel);
        intervaloCarrossel = setInterval(proximoDepoimento, 8000);
    }
    
    btnAnterior.addEventListener('click', () => {
        mostrarDepoimento(depoimentoAtual - 1);
    });
    
    btnProximo.addEventListener('click', () => {
        mostrarDepoimento(depoimentoAtual + 1);
    });
    
    reiniciarIntervalo();
    
    // Efeito de scroll no cabeçalho
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
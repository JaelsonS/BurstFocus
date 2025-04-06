document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        {
            id: 1,
            nome: "Curso Pomodoro Avançado",
            categoria: "cursos",
            preco: 297.90,
            precoPromo: 197.90,
            descricao: "Aprenda técnicas avançadas do método Pomodoro para maximizar sua produtividade.",
            imagem: "img/curso-pomodoro.jpg",
            destaque: true,
            linkAfiliado: "https://exemplo.com/curso-pomodoro?ref=burstfocus"
        },
        {
            id: 2,
            nome: "Template Notion Produtividade",
            categoria: "templates",
            preco: 89.90,
            precoPromo: 49.90,
            descricao: "Sistema completo de organização pessoal e profissional no Notion.",
            imagem: "img/template-notion.jpg",
            destaque: false,
            linkAfiliado: "https://exemplo.com/notion-template?ref=burstfocus"
        },
    ];

    const depoimentos = [
        {
            nome: "Carlos Silva",
            texto: "Comprei o curso Pomodoro e minha produtividade aumentou em 300%! Valeu cada centavo.",
            avatar: "img/avatar1.jpg"
        },
    ];

    const gradeProdutos = document.querySelector('.grade-produtos');
    const carrosselDepoimentos = document.querySelector('.carrossel-depoimentos');
    const modal = document.getElementById('modal-produto');
    const fecharModal = document.querySelector('.fechar-modal');
    const botaoCombo = document.getElementById('botao-combo');
    function renderizarProdutos(filtro = 'todos') {
        gradeProdutos.innerHTML = '';
        
        const produtosFiltrados = filtro === 'todos' 
            ? produtos 
            : produtos.filter(prod => prod.categoria === filtro);
        
        produtosFiltrados.forEach(produto => {
            const produtoElement = document.createElement('div');
            produtoElement.className = `produto ${produto.destaque ? 'destaque' : ''}`;
            produtoElement.dataset.categoria = produto.categoria;
            produtoElement.dataset.id = produto.id;
            
            produtoElement.innerHTML = `
                <div class="produto-imagem">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    ${produto.destaque ? '<span class="etiqueta-destaque">DESTAQUE</span>' : ''}
                </div>
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <div class="produto-precos">
                        <span class="preco-original">R$ ${produto.preco.toFixed(2)}</span>
                        <span class="preco-promo">R$ ${produto.precoPromo.toFixed(2)}</span>
                    </div>
                    <button class="botao-detalhes" data-id="${produto.id}">Ver Detalhes</button>
                </div>
            `;
            
            gradeProdutos.appendChild(produtoElement);
        });

        document.querySelectorAll('.botao-detalhes').forEach(botao => {
            botao.addEventListener('click', function() {
                const produtoId = parseInt(this.dataset.id);
                abrirModal(produtoId);
            });
        });
    }

    function abrirModal(produtoId) {
        const produto = produtos.find(p => p.id === produtoId);
        if (!produto) return;
        
        const modalCorpo = document.querySelector('.modal-corpo');
        modalCorpo.innerHTML = `
            <div class="modal-imagem">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="modal-info">
                <h2>${produto.nome}</h2>
                <p class="modal-descricao">${produto.descricao}</p>
                <div class="modal-precos">
                    <span class="preco-original">De: R$ ${produto.preco.toFixed(2)}</span>
                    <span class="preco-promo">Por: R$ ${produto.precoPromo.toFixed(2)}</span>
                </div>
                <a href="${produto.linkAfiliado}" class="botao-comprar" target="_blank">Comprar Agora</a>
                <div class="modal-garantia">
                    <i class="fas fa-shield-alt"></i>
                    <span>7 dias de garantia incondicional</span>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    function renderizarDepoimentos() {
        carrosselDepoimentos.innerHTML = '';
        
        depoimentos.forEach(depoimento => {
            const depoimentoElement = document.createElement('div');
            depoimentoElement.className = 'depoimento';
            
            depoimentoElement.innerHTML = `
                <div class="depoimento-avatar">
                    <img src="${depoimento.avatar}" alt="${depoimento.nome}">
                </div>
                <div class="depoimento-conteudo">
                    <h4>${depoimento.nome}</h4>
                    <p>"${depoimento.texto}"</p>
                    <div class="avaliacao">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            `;
            
            carrosselDepoimentos.appendChild(depoimentoElement);
        });
    }

    function atualizarContador() {
        let horas = 24;
        let minutos = 59;
        let segundos = 59;
        
        const contador = document.getElementById('contador');
        
        const intervalo = setInterval(() => {
            segundos--;
            
            if (segundos < 0) {
                segundos = 59;
                minutos--;
            }
            
            if (minutos < 0) {
                minutos = 59;
                horas--;
            }
            
            if (horas < 0) {
                clearInterval(intervalo);
                contador.textContent = "Oferta encerrada!";
                return;
            }
            
            contador.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }, 1000);
    }

    function atualizarContadorCombo() {
        let horas = 2;
        let minutos = 59;
        let segundos = 59;
        
        const contador = document.getElementById('contador-combo');
        
        const intervalo = setInterval(() => {
            segundos--;
            
            if (segundos < 0) {
                segundos = 59;
                minutos--;
            }
            
            if (minutos < 0) {
                minutos = 59;
                horas--;
            }
            
            if (horas < 0) {
                clearInterval(intervalo);
                contador.textContent = "Promoção encerrada!";
                botaoCombo.disabled = true;
                return;
            }
            
            contador.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }, 1000);
    }

    document.querySelectorAll('.botao-filtro').forEach(botao => {
        botao.addEventListener('click', function() {
            document.querySelectorAll('.botao-filtro').forEach(btn => btn.classList.remove('ativo'));
            this.classList.add('ativo');
            renderizarProdutos(this.dataset.categoria);
        });
    });

    document.getElementById('busca-produto').addEventListener('input', function(e) {
        const termo = e.target.value.toLowerCase();
        
        document.querySelectorAll('.produto').forEach(produto => {
            const nome = produto.querySelector('h3').textContent.toLowerCase();
            produto.style.display = nome.includes(termo) ? 'block' : 'none';
        });
    });

    fecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    botaoCombo.addEventListener('click', function() {
        window.location.href = "https://exemplo.com/combo-produtividade?ref=burstfocus";
    });

    renderizarProdutos();
    renderizarDepoimentos();
    atualizarContador();
    atualizarContadorCombo();
    document.querySelectorAll('.produto').forEach(produto => {
        produto.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        produto.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        });
    });
});
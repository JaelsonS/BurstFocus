document.addEventListener('DOMContentLoaded', function() {
    // Carregar anúncios dinâmicos
    const ads = [
        "Aproveite nosso curso exclusivo de produtividade! 50% de desconto hoje!",
        "Ebook grátis: '10 Hábitos das Pessoas Altamente Produtivas'!",
        "Workshop online: Como triplicar seu foco em 30 dias!"
    ];
    
    const products = [
        {name: "Livro: O Poder do Hábito", price: "R$ 49,90"},
        {name: "Curso Online: Foco Máximo", price: "R$ 297,00"},
        {name: "Planner Premium BurstFocus", price: "R$ 89,90"},
        {name: "Caneta Especial para Anotações", price: "R$ 29,90"}
    ];
    
    // Anúncios dinâmicos
    document.getElementById('dynamic-ad').textContent = ads[Math.floor(Math.random() * ads.length)];
    document.getElementById('dynamic-ad-2').textContent = ads[Math.floor(Math.random() * ads.length)];
    
    // Carrossel de produtos
    const carousel = document.getElementById('product-carousel');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <h4>${product.name}</h4>
            <p class="text-accent">${product.price}</p>
            <button class="btn btn-sm" onclick="showProductInterest('${product.name}')">Tenho interesse</button>
        `;
        carousel.appendChild(productDiv);
    });
    
    // Formulário de contato
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.`);
        this.reset();
    });
});

function showStory(storyId) {
    const story = document.getElementById(storyId);
    story.style.display = story.style.display === 'block' ? 'none' : 'block';
}

function shareStory(person) {
    alert(`História de ${person} compartilhada nas redes sociais! Obrigado por espalhar inspiração.`);
}

function showProductInterest(productName) {
    alert(`Ótima escolha! Você demonstrou interesse em "${productName}". Um de nossos consultores entrará em contato com mais detalhes.`);
}
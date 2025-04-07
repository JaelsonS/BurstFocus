document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const content = button.nextElementSibling;

            // Fecha todos os outros itens do acordeão
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    const otherButton = otherItem.querySelector('.accordion-button');
                    const otherContent = otherItem.querySelector('.accordion-content');
                    if (otherButton && otherContent) {
                        otherButton.classList.remove('active');
                        otherContent.style.maxHeight = null;
                    }
                }
            });

            // Alterna o estado do item atual
            button.classList.toggle('active');
            if (button.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Abre o primeiro item do acordeão por padrão
    if (accordionButtons.length > 0) {
        accordionButtons[0].classList.add('active');
        accordionButtons[0].nextElementSibling.style.maxHeight = accordionButtons[0].nextElementSibling.scrollHeight + 'px';
    }

    // Máscara para o campo de telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

            if (value.length > 0) {
                value = '(' + value;
            }
            if (value.length > 3) {
                value = value.substring(0, 3) + ') ' + value.substring(3);
            }
            if (value.length > 9) {
                value = value.substring(0, 9) + '-' + value.substring(9, 13);
            }

            e.target.value = value;
        });
    }
});


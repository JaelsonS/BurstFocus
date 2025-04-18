document.addEventListener('DOMContentLoaded', function () {
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) value = '(' + value;
            if (value.length > 3) value = value.substring(0, 3) + ') ' + value.substring(3);
            if (value.length > 9) value = value.substring(0, 9) + '-' + value.substring(9, 13);
            e.target.value = value;
        });
    }
});


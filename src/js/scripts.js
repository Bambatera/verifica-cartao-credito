// Este arquivo contém scripts JavaScript que podem ser utilizados para adicionar interatividade às páginas. 
// Organize o código em funções e siga boas práticas de programação.

function init() {
    console.log("Página carregada com sucesso!");

    // Oculta a tag img caso o input esteja em branco
    const cardNumberInput = document.getElementById('card-number');
    const cardLogo = document.getElementById('card-logo');
    if (!cardNumberInput.value.trim()) {
        cardLogo.style.display = 'none'; // Oculta a imagem
    }

    // Adiciona evento para mostrar/ocultar a imagem conforme o input
    cardNumberInput.addEventListener('input', function () {
        if (this.value.trim()) {
            cardLogo.style.display = 'block'; // Mostra a imagem
        } else {
            cardLogo.style.display = 'none'; // Oculta a imagem
        }
    });

    // Adiciona funcionalidade ao botão "Limpar"
    const clearButton = document.getElementById('limpar-campo');
    clearButton.addEventListener('click', function () {
        cardNumberInput.value = ''; // Limpa o conteúdo do input
        cardLogo.style.display = 'none'; // Oculta a imagem
        cardLogo.src = ''; // Remove o caminho da imagem
    });
}

document.addEventListener("DOMContentLoaded", init);

document.getElementById('card-number').addEventListener('input', function () {
    const cardNumber = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '); // Adiciona espaços a cada 4 dígitos
    this.value = formattedCardNumber;

    const cardLogo = document.getElementById('card-logo');
    cardLogo.src = ''; // Limpa a imagem antes de verificar

    // Identificação oficial das bandeiras
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/visa.svg'; // Visa
    } else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/mastercard.svg'; // Mastercard
    } else if (/^3[47][0-9]{13}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/amex.svg'; // American Express
    } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/diners.svg'; // Diners Club
    } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/discover.svg'; // Discover
    } else if (/^2(?:014|149)[0-9]{11}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/enroute.svg'; // EnRoute
    } else if (/^(?:2131|1800|35\d{3})\d{11}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/jcb.svg'; // JCB
    } else if (/^8699[0-9]{11}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/voyager.svg'; // Voyager
    } else if (/^606282[0-9]{10}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/hipercard.svg'; // HyperCard
    } else if (/^50[0-9]{14}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/aura.png'; // Aura
    } else if (/^(4011|4312|4389|4514|4576|5041|6277|6362|6504|6505|6506|6507|6508|6509|6516|6550)[0-9]{12}$/.test(cardNumber)) {
        cardLogo.src = 'assets/img/flags/elo.svg'; // Elo
    } else {
        cardLogo.src = ''; // Limpa a imagem se não for reconhecido
    }
});
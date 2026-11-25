
// Seleciona os elementos do HTML que serão utilizados.
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");
const themeLabel = document.querySelector("#themeLabel");

const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");

const bookingForm = document.querySelector("#bookingForm");
const formMessage = document.querySelector("#formMessage");

const backTop = document.querySelector("#backTop");
const year = document.querySelector("#year");

// Atualiza o botão de acordo com o tema atual.
function updateThemeButton() {

    const isLight = document.body.classList.contains("light");

    if (isLight) {
        themeIcon.textContent = "☾";
        themeLabel.textContent = "Modo escuro";
    } else {
        themeIcon.textContent = "☀";
        themeLabel.textContent = "Modo claro";
    }
}

// Alterna entre o modo claro e o modo escuro.
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light");

    updateThemeButton();

});

// Abre e fecha o menu para celulares.
menuToggle.addEventListener("click", function() {

    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "×" : "☰";

});

// Fecha o menu quando o usuário escolhe uma página.
navMenu.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});

// Valida e simula o envio do formulário.
bookingForm.addEventListener("submit", function(event) {

    // Impede o recarregamento da página.
    event.preventDefault();

    // Verifica se os campos obrigatórios foram preenchidos.
    if (!bookingForm.checkValidity()) {

        bookingForm.reportValidity();

        return;

    }

    // Captura o nome informado pelo cliente.
    const nome = document.querySelector("#nome").value.trim();

    // Exibe uma mensagem na tela.
    formMessage.textContent =
        `Obrigado, ${nome}! Sua solicitação foi preenchida. Este protótipo não envia os dados; entre em contato com o estúdio para confirmar.`;

    // Limpa os campos do formulário.
    bookingForm.reset();

});

// Mostra o botão de voltar ao topo ao rolar a página.
window.addEventListener("scroll", function() {

    if (window.scrollY > 450) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

// Faz a página voltar ao início quando o botão é clicado.
backTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Coloca o ano atual automaticamente no rodapé.
year.textContent = new Date().getFullYear();

// Inicializa o botão de tema.
updateThemeButton();

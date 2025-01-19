// Inicializar o EmailJS
(function () {
    emailjs.init('W1kFiTwkaapuAfm91');
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs
        .sendForm('service_t51vq34', 'template_1yej7ld', this)
        .then(
            function () {
                const confirm = document.querySelector(".certo")
                confirm.style.marginLeft = "0%"
            },
            function (error) {
                alert('Erro ao enviar o e-mail: ' + error.text);
            }
        );
});
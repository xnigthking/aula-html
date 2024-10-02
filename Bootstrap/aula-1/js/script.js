$(document).ready(function (){
    $('#contactForm').on("submit", function(e){
        e.preventDefault();
        const nome = $('#nome').val();
        const email = $('#email').val();
        const mensagem = $('#mensagem').val();

        $('#liveToast').toast('show');

        $(this).trigger('reset')
    });
});

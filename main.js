$(document).ready(function () {
    // Função para rolagem suave até as seções do site
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            1000,
            'easeInOutExpo'
        );
    });

    // Função para o botão voltar ao topo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });

    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
        return false;
    });
});

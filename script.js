$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Event listener for image click
    document.querySelector('.img-fluid').addEventListener('click', function () {
        alert('Anda mengklik gambar!');
    });
});

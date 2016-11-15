$(function() {
    $('#form_button').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/marta.bzl@gmail.com",
                method: "POST",
                data: {
                    userName: $('#userName').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('form').html('<h1>Thank you!</h1>')
            })
            .fail(function() {
                $('form').html('<h1>Error</h1>')
            });
    });
});
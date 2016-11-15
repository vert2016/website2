pageLoaded.innerHTML = (new Date()).toLocaleTimeString();
form_button.addEventListener('click', makeAjax);

function makeAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var clientData = JSON.parse(xhr.responseText);
            name.innerHTML = clientData.name;
            email.innerHTML = clientData.address;
        }
    }
    xhr.open('GET', 'data.json', true);
    xhr.send();
}

$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/marta.bzl@gmail.com",
                method: "POST",
                data: {
                    name: $('#userName').val()
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
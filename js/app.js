$( document ).ready(function() {
    console.log( "ready!" );

    $("#save").click(function() {
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request
            url: "sendEmail.php",
            // The data to send (will be converted to a query string)
            data: {
                nome: $("#nome").val(),
                email: $("#email").val(),
                telefone: $("#telefone").val(),
                assunto: $("#assunto").val(),
                mensagem: $("#mensagem").val()
            },
            // Whether this is a POST or GET request
            type: "POST",
            // The type of data we expect back
            dataType : "json",
        })
        // Code to run if the request succeeds (is done);
        // The response is passed to the function
        .done(function( json ) {
            $("#response").html(json.msg);
            $("#response").show();
        })
        // Code to run if the request fails; the raw request and
        // status codes are passed to the function
        .fail(function( xhr, status, errorThrown ) {
            alert( "Desculpe, houve algum problema com o envio do e-mail, tente novamente!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        })
        // Code to run regardless of success or failure;
        .always(function( xhr, status ) {
            alert( "A requisição está completa!" );
        });
    });
});
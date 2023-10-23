$(document).ready(function () {
    $('#subscribe').submit(function (e) {
        e.preventDefault();
        let input1 = $("#user_name").val();
        let input2 = $("#user_email").val();
        if (input1 == "" || input2 == "") {
            $("#warning").html("Parece que há um ou mais campos em branco. Por favor, tente novamente");
        } else {
            $("#submit").html("<img src='public/img/loading.gif'>");
            $("#warning").html("");
            var userData = {
                user_name: input1,
                user_email: input2
            };
            $.ajax({
                type: 'POST',
                url: 'cadastro.php',
                data: userData,
                success: function () {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: {
                            user_name: input1,
                            user_email: input2
                        }
                    });
                    $("#submit").html("QUERO GARANTIR A MINHA INSCRIÇÃO");
                    document.location = "obrigado";
                }
            });
        }
    });
});

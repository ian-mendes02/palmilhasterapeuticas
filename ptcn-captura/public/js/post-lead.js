import Lead from './modules/lead.js'
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
            var user_data = new Lead(input1, input2, "ptcn/out23")
            console.log(user_data);
            $.ajax({
                type: 'POST',
                url: 'cadastro.php',
                data: user_data,
                success: function (data) {
                    console.log(data)
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: user_data,
                        success: function () {
                            $("#submit").html("QUERO GARANTIR A MINHA INSCRIÇÃO");
                            document.location = "obrigado";
                        }
                    });
                }
            });
        }
    });
});
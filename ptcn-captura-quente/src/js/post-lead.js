import Lead from './modules/lead.js';
$(document).ready(function () {
    var t1 = Date.now();
    var url = window.location.href;
    $('#subscribe').submit(function (e) {
        e.preventDefault();
        let input1 = $("#user_name").val();
        let input2 = $("#user_email").val();
        if (input1 == "" || input2 == "") {
            $("#warning").html("Parece que há um ou mais campos em branco. Por favor, tente novamente");
        } else {
            var t2 = Date.now();
            var time_elapsed = Math.round((t2 - t1) / 1000) + "s";
            $("#submit").html("<img src='public/img/loading.gif'>");
            $("#warning").html("");
            var user_data = new Lead(input1, input2, "ptcn/out23", time_elapsed);
            $.ajax({
                type: 'POST',
                url: 'cadastro.php',
                data: user_data,
                success: function () {
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
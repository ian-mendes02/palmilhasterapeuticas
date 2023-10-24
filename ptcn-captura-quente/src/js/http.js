$(document).ready(function () {
    $('#subscribe').submit(function (e) {
        e.preventDefault();
        let input1 = $("#user_name").val().trim().toLowerCase();
        let input2 = $("#user_email").val().trim().toLowerCase();
        if (input1 == "" || input2 == "") {
            $("#warning").html("Parece que há um ou mais campos em branco. Por favor, tente novamente");
        } else {
            $("#submit").html("<img src='public/img/loading.gif'>");
            $("#warning").html("");
            var names = input1.split(" ");
            if (names.length >= 2) {
                var firstName = names[0];
                var lastName = names.slice(names.length - 1).join(" ");
            } else {
                $('#warning').html("Por favor, insira um nome completo.")
            }
            var userData = {
                user_name: input1,
                user_email: input2
            };
            var pixelData = {
                event_name: "Lead",
                event_time: Date.now(),
                action_source: "website",
                event_source_url: window.location.href,
                user_data: {
                    "lead_id": Math.floor(100000 + Math.random() * 900000),
                    "fn": firstName,
                    "ln": lastName,
                    "em": input2
                }
            };
            $.ajax({
                type: 'POST',
                url: 'pixel.php',
                data: pixelData,
            });
            $.ajax({
                type: 'POST',
                url: 'cadastro.php',
                data: userData,
                success: function () {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: userData,
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
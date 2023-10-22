var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


function verificaForcaSenha() 
{
	var numeros = /([0-9])/;
	var alfabetoa = /([a-z])/;
	var alfabetoA = /([A-Z])/;
	var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;


	if($('#password').val().length<8) 
	{
		$('#password-status').html("<span style='color:red'>Fraco, insira no mínimo 8 caracteres</span>");
	} else {  	
		if($('#password').val().match(numeros) && $('#password').val().match(alfabetoa) && $('#password').val().match(alfabetoA) && $('#password').val().match(chEspeciais))
		{            
			$('#password-status').html("<span style='color:green'><b>Forte</b></span>");
		} else {
			$('#password-status').html("<span style='color:orange'>Médio</span>");
		}
	}
}

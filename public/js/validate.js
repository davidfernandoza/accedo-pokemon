$(document).ready(start)

function start() {
	$('#send').on('click', () => {
		$('#formPassword').validate({
			rules: {
				password: { required: true, minlength: 8, maxlength: 60 },
				confirmPassword: {
					equalTo: '#password'
				}
			},
			messages: {
				password: {
					required: 'La contraseña es requerida',
					minlength: 'El minimo permitido son 8 caracteres',
					maxlength: 'El maximo permitido son 60 caracteres'
				},
				confirmPassword: {
					equalTo: 'Las contraseñas deben coincidir'
				}
			}
		})
	})
}

// $(document).ready(function () {})

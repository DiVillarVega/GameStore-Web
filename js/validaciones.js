$(document).ready(function() {

  // Validar formulario de registro
  $('#formulario_registro').validate(
    {
      rules: {
        nombres: {
          required: true,
          minlength: 5,
          mxlength: 50
        },
        apellidos: {
          required: true,
          minlength: 5,
          mxlength: 50
        },
        correo: {
          required: true,
          email: true
        },
        direccion: {
          required: true,
          minlength: 10,
          mxlength: 80
        },
        password: {
          required: true,
          minlength: 5
        },
        password2: {
          required: true,
          equalTo: '#password'
        }
      },
      messages: {
        nombres: {
          required: 'El nombre es un campo requerido',
          minlength: 'El nombre debe tener un mínimo de 5 caracteres',
          mxlength: 'El nombre debe tener un máximo de 50 caracteres'
        },
        apellidos: {
          required: 'El apellido es un campo requerido',
          minlength: 'El apellido debe tener un mínimo de 5 caracteres',
          mxlength: 'El apellido debe tener un máximo de 50 caracteres'
        },
        correo: {
          required: 'El correo es un campo obligatorio',
          email: 'Ingrese un correo válido'
        },
        direccion: {
          required: 'La dirección es un campo requerido',
          minlength: 'La dirección debe tener un mínimo de 10 caracteres',
          mxlength: 'La dirección debe tener un máximo de 80 caracteres'
        },
        password: {
          required: 'La contraseña es un campo requerido',
          minlength: 'La contraseña debe tener un mínimo de 5 caracteres'
        },
        password2: {
          required: 'Repita la contraseña',
          equalTo: 'Las contraseñas deben ser iguales'
        }
      }
    }
  );

  // Validar formulario de mis datos
  $('#formulario_misdatos').validate(
    {
      rules: {
        nombres: {
          required: true,
          minlength: 5,
          mxlength: 50
        },
        apellidos: {
          required: true,
          minlength: 5,
          mxlength: 50
        },
        correo: {
          required: true,
          email: true
        },
        direccion: {
          required: true,
          minlength: 10,
          mxlength: 80
        },
        password: {
          required: true,
          minlength: 5
        },
        password2: {
          required: true,
          equalTo: '#password'
        }
      },
      messages: {
        nombres: {
          required: 'El nombre es un campo requerido',
          minlength: 'El nombre debe tener un mínimo de 5 caracteres',
          mxlength: 'El nombre debe tener un máximo de 50 caracteres'
        },
        apellidos: {
          required: 'El apellido es un campo requerido',
          minlength: 'El apellido debe tener un mínimo de 5 caracteres',
          mxlength: 'El apellido debe tener un máximo de 50 caracteres'
        },
        correo: {
          required: 'El correo es un campo obligatorio',
          email: 'Ingrese un correo válido'
        },
        direccion: {
          required: 'La dirección es un campo requerido',
          minlength: 'La dirección debe tener un mínimo de 10 caracteres',
          mxlength: 'La dirección debe tener un máximo de 80 caracteres'
        },
        password: {
          required: 'La contraseña es un campo requerido',
          minlength: 'La contraseña debe tener un mínimo de 5 caracteres'
        },
        password2: {
          required: 'Repita la contraseña',
          equalTo: 'Las contraseñas deben ser iguales'
        }
      }
    }
  );

});
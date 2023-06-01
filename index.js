// obtener el formulario
const formulario_login = document.getElementById("login");

// obtener el input
const input_usuario = document.getElementById("Usuario");

// comenzar variable de ultimo valor del input
let ultimoValor = "";

// Agregar un event listener al input para que escuche cuando el usuario escribe
input_usuario.addEventListener("input", (event) => {
  ultimoValor = event.target.value;
});

// Agregar un event listener al formulario para escuchar el evento submit

formulario_login.addEventListener("submit", enviarFormulario);

function enviarFormulario(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario de recargar la pagina

  const nombreUsuario = ultimoValor;
  //   alert(`Hola, somos Cerebritos Team es un gusto ${nombreUsuario}`);
}
// alert("holiiii");

function boton() {
  let usuario = document.getElementById("Usuario").value;
  let contraseña = document.getElementById("Contraseña").value;
  if (usuario === "Cerciber@gmail.com" && contraseña === "AmoaDenis") {
    window.location.href = "inicio-cerebritos.html";
  } else if (usuario === "Heaven@gmail.com" && contraseña === "Ruloesminovio") {
    window.location.href = "inicio-cerebritos.html";
  } else if (usuario === "Rulo@gmail.com" && contraseña === "Heavenesminovia") {
    window.location.href = "inicio-cerebritos.html";
  } else if (usuario === "Denisolo@gmail.com" && contraseña === "AmoaCesar") {
    window.location.href = "inicio-cerebritos.html";
  } else {
    var rechazado = document.getElementById("img-divinas");
    rechazado.style.display = "flex";
    setTimeout(function () {
      rechazado.style.display = "none";
    }, 4000);
  }
}
console.log("Hola cerebritos")
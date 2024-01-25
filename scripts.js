var boton = document.getElementById("botoncito");
var textoPrincipal = document.getElementById("texto-principal")

boton.addEventListener("click", CambiarTexto)

function CambiarTexto()
{
  if (boton.classList.contains("bienvenida") === true)
  {
    boton.classList.remove("bienvenida")
    boton.classList.add("despedida")
    textoPrincipal.innerText = "Por favor no te vayas, tenemos ofertas :("
  }
  else if (boton.classList.contains("despedida") === true)
  {
    boton.classList.remove("despedida")
    boton.classList.add("bienvenida")
    textoPrincipal.innerText = "¡Bienvenido a mi web!"
  }
}

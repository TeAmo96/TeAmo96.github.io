function logueo(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    const correctPassword = "12345"; // Cambia esta contraseña por la que necesites
    const inputPassword = document.getElementById("contra").value;
    const errorMessage = document.getElementById("error-message");

    if (inputPassword === correctPassword) {
        window.location.href = "pagina_secreta.html"; // Redirecciona a la página secreta
    } else {
        errorMessage.style.display = "block"; // Muestra el mensaje de error
    }

    return false; // Retorna false para asegurar que el formulario no se envíe
}

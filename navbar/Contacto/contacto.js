
let btn = document.querySelector('#boton-enviar');

btn.onclick = function(){
    let name = document.querySelector('#nombre-input').value;
    let phone = document.querySelector('#telefono-input').value;
    let email = document.querySelector('#email-input').value;
    let message = document.querySelector('#message-input').value;

    
    let contacto = JSON.parse(localStorage.getItem('consultas - mensajes')) || [];

    let formData = {
        name,
        phone,
        email,
        message
    };

    contacto.push(formData);
    
    localStorage.setItem('consultas - mensajes', JSON.stringify(contacto));
    alert('Mensaje enviado con exito.');
    location.reload();
}


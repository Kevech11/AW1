document.addEventListener('DOMContentLoaded', function () {
    let contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        letformData = {
            name: contactForm.elements['name'].value,
            phone: contactForm.elements['phone'].value,
            email: contactForm.elements['email'].value,
            message: contactForm.elements['message'].value
        }; 
        let existingData = JSON.parse(localStorage.getItem('contactData')) || [];       
        existingData.push(formData);    
        localStorage.setItem('contactData', JSON.stringify(existingData));
        alert('¡Formulario enviado con éxito!');
    });
});
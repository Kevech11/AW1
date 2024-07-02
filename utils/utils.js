let form = document.querySelector("form");

if (form) {
    form.onsubmit = (e) => {
        e.preventDefault();
    }
}

function redireccionarAInicio() {
    let actualLocation = window.location.href; 
    // 'http://127.0.0.1:5500/page/login/signup.html, http://127.0.0.1:5500/page/login/login.html
    let splittedLocation = actualLocation.split('/');
    splittedLocation.pop();
    splittedLocation.pop();
    splittedLocation.pop();
    splittedLocation.push('index.html');
    
    window.location.href = splittedLocation.join('/');  // http://127.0.0.1:5500/index.html
}


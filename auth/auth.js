const btnLogin = document.getElementById('loguear')
import { addSession } from "../utils/sessionStorage.controller.js";

const auth = async ({name, pasword})=>{
    const user = await fetch('http://localhost:5500/user/login',{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"userName": name,"pass": pass})
    }).then((res)=>{
        if(!res.ok){
            throw new Error ("Error en la petición");
        }
        return res.json()
    }).catch(error=> {
        console.error("Error:", error)
        throw new ("Error en la petición");
    });
    return user
}

btnLogin.addEventListener ('click', async ()=> {
    const name = document.getElementById('emailInput').value 
    const pass = document.getElementById('passwordInput').value

    if (name != '' && pass  !=''){
        try{
            const user = await auth({name, pass})
            addSession(user)
            window.location.href= "../index.html"
        }catch(error){
            alert('No se encontro el usuario')
        }
    }else{
        alert ('Campos requeridos')
    }
})
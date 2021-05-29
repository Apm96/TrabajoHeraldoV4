import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import axios from 'axios';
import swal from 'sweetalert';

const Login = () => {

    function SigIn(){

        var username = document.getElementById("TxtUser").value;
        var password = document.getElementById("TxtPassword").value;

        if (username == ""){
            swal("Información", "¡Digite su nombre de usuario!", "info");
            return;
        }

        if (password == ""){
            swal("Información", "¡Digite su contraseña!", "info");
            return;
        }

        const user = {
            user: username,
            password: password
        }

        axios.post('http://localhost:5000/api/v1/user/login', 
        { user })
        .then(res => {
            console.log(res.data);
            if (res.status == 200){
                window.location.href = "/AdministradorNoticias";
            }else
            {                
                swal("Error", "Error internal server", "error");
            }
        })
    }


    return ( 
        <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>LOGIN</h3>
              <p>Por favor ingrese sus credenciales.</p>
            </div>
          </div>
            <input id="TxtUser" type="text" placeholder="Usuario"/>
            <input id="TxtPassword" type="password" placeholder="Contraseña"/>
            <button onClick={SigIn} >login</button>
            <p class="message">Not Registrado? 
            <Link to="/Register">
            <a href="#">Crear una cuenta</a></Link></p>
        </div>
      </div>
    )
}

export default Login;
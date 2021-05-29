import React from 'react';
import {Link} from 'react-router-dom';
import './register.css'
import axios from 'axios';
import swal from 'sweetalert';

const Register = () => {

  function Register() {

    var username = document.getElementById("TxtUser").value;
    var password = document.getElementById("TxtPassword").value;
    var passowordConfir = document.getElementById("TxtConfirmPassword").value;
    var telefono = document.getElementById("TxtTelefono").value;
    var direccion = document.getElementById("TxtDireccion").value;
    var nombre = document.getElementById("TxtNombre").value;

    if (username == "") {
      swal("Información", "¡Digite su nombre de usuario!", "info");
      return;
    }

    if (password == "") {
      swal("Información", "¡Digite su contraseña!", "info");
      return;
    }

    if (telefono == "") {
      swal("Información", "¡Digite su telefono!", "info");
      return;
    }

    if (direccion == "") {
      swal("Información", "¡Digite la direccion!", "info");
      return;
    }

    if (nombre == "") {
      swal("Información", "¡Digite su nombre!", "info");
      return;
    }

    if (password != passowordConfir) {
      swal("Información", "Las contraseñas no coinciden", "info");
      return;
    }

    const user = {
      user: username,
      password: password,
      nombre: nombre,
      telefono: telefono,
      direccion:direccion
    }

    axios.post('http://localhost:5000/api/v1/user/', {
        user
      })
      .then(res => {
        console.log(res.data);
        if (res.status == 200) {
          swal("Informacion", "Registro Exitoso", "success");
          console.log(res.data);
          window.location.href = "/Login";
        } else {
          swal("Error", "Error internal server", "error");
        }
      })
  }

  return (
    <div class="register-page">
    <div class="formregister">
      <div class="register">
        <div class="login-header">
          <h3>REGISTER</h3>
          <p>Por favor ingrese sus datos.</p>
        </div>
      </div>
      <input id="TxtNombre" type="text" placeholder="Nombres"/>
        <div class="row">
          <div class="col-sm-7">     
              <input id="TxtDireccion" type="text" placeholder="Direccion"/>      
          </div>
          <div class="col-sm-5">
              <input id="TxtTelefono" type="text" placeholder="Telefono"/>    
          </div>
        </div>
        <input id="TxtUser" type="text" placeholder="Usuario"/>
       
        <input id="TxtPassword" type="password" placeholder="Contraseña"/>
        <input id="TxtConfirmPassword" type="password" placeholder="Confirmar Contraseña"/>
        <button onClick={Register} >Register</button>
        <p class="message">
        <Link to="/Login">
        <a href="#">Regresar</a></Link></p>
    </div>
  </div>
  )
}

export default Register;
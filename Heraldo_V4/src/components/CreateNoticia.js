import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";
import swal from "sweetalert";

const CreateNoticia = () => {

    var ImagenBase64 = "";
    function LLenarImagen(){
        if( document.getElementById("TxtImagen").files.length != 0 ){
           Main();
        }
    }
    
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    
     async function Main() {       
       const file = document.querySelector('#TxtImagen').files[0];
       console.log(await toBase64(file));
       ImagenBase64 = await toBase64(file);
    }


  function CrearNoticia() {
    var titulo = document.getElementById("TxtTitulo").value;
    var descripcion = document.getElementById("TxtDescripcion").value;
    var visible = document.getElementById("ComboVisible").value;
    var fechaCreacion = document.getElementById("TxtFechaCreacion").value;
    var categoria = document.getElementById("ComboCategoria").value;
    var horaNoticia = document.getElementById("TxtHoraNoticia").value;
    var resumen = document.getElementById("TxtResumen").value;

    if (titulo == "") {
      swal("Información", "¡Digite el titulo de la noticia!", "info");
      return;
    }

    if (descripcion == "") {
      swal("Información", "¡Digite la  descripcion de la noticia!", "info");
      return;
    }

    if (visible == "") {
      swal("Información", "¡Seleccione la opcion de visible!", "info");
      return;
    } else{
        if (visible == "SI") {
            visible = true;
        } else {
            visible = false;
        }
    }

    if (fechaCreacion == "") {
      swal("Información", "¡Digite la fecha!", "info");
      return;
    }

    if (categoria == "") {
      swal("Información", "¡Seleccione una categoria!", "info");
      return;
    }

    if (horaNoticia == "") {
      swal("Información", "Las hora no puede ser vacia", "info");
      return;
    }

    if (resumen == "") {
      swal("Información", "Digite el resumen de la noticia", "info");
      return;
    }

    if( document.getElementById("TxtImagen").files.length == 0 ){
        swal("Información", "Seleccione una imagen para la noticia", "info");
        return;
    }

    //Main()
    const noticia = {
      titulo: titulo,
      descripcion: descripcion,
      idUser: 1,
      visible: visible,
      fechaCreacion: fechaCreacion,
      categoria: categoria,
      horaNoticia: horaNoticia,
      imagen: ImagenBase64,
      resumen: resumen
    };

    axios
      .post("http://localhost:5000/api/v1/noticia/", {
        noticia,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status == 200) {
          swal("Informacion", "Registro Exitoso", "success");
          console.log(res.data);
          window.location.href = "/AdministradorNoticias";
        } else {
          swal("Error", "Error internal server", "error");
        }
      });
  }

  return (
    <div class="register-page">
      <div class="formregister">
        <div class="register">
          <div class="login-header">
            <h3>CREAR NOTICIA</h3>
            <p>Por favor ingrese los datos de la noticia.</p>
          </div>
        </div>
        <input id="TxtTitulo" type="text" placeholder="Titulo" />

        <input id="TxtDescripcion" type="text" placeholder="Descripcion" />

        <select id="ComboVisible" class="form-control">
          <option>SI</option>
          <option>NO</option>
        </select>
        <br></br>

        <input id="TxtFechaCreacion" type="date" placeholder="Fecha Creacion" />
        <input id="TxtHoraNoticia" type="time" placeholder="Hora" />

        <select id="ComboCategoria" class="form-control">
          <option>Deportes</option>
          <option>Judicial</option>
          <option>Economia</option>
          <option>Sociales</option>
          <option>Entretimiento</option>
          <option>Salud</option>
          <option>Politica</option>
        </select>
        <br></br>
        <input id="TxtImagen" onChange={LLenarImagen} type="file" placeholder="Imagen" />

        <input id="TxtResumen" type="text" placeholder="Resumen" />
        <button onClick={CrearNoticia}>Crear Noticia</button>
      </div>
    </div>
  );
};

export default CreateNoticia;

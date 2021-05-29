import React from 'react';
import {Link} from 'react-router-dom';
import './administradornoticias.css'
import axios from 'axios';
import swal from 'sweetalert';

const AdministradorNoticias = () => {

  //AdministradorNoticias();

  var Noticias = new Array();
  function AdministradorNoticias() {    

   
    axios.get('http://localhost:5000/api/v1/noticia/')
      .then(res => {        
        if (res.status == 200) {
          Noticias = res.data;           
        } else {
          swal("Error", "Error internal server", "error");
        }
      })
  }

  return (   
    <div class="row">
       <div class="col-md-2"></div>
        <div class="col-md-8">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Usuario</th>
                        <th>Visible</th>
                        <th>Fecha</th>
                        <th>Categoria</th>
                        <th>Hora</th>
                        <th>Imagen</th>
                        <th>Resumen</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                { Noticias.map((Noticia, index) => (  

                    <tr data-index={index} >
                        <td>{Noticia.id}</td>
                        <td>{Noticia.titulo}</td>
                        <td>{Noticia.descripcion}</td>
                        <td>{Noticia.usuario}</td>
                        <td>{Noticia.visible}</td>
                        <td>{Noticia.fecha_creacion}</td>
                        <td>{Noticia.categoria}</td>
                        <td>{Noticia.hora_noticia}</td>
                        <td>{Noticia.resumen}</td>
                        <td style={{textAlign:"center"}} ><img src={Noticia.imagen}></img></td>                               
                        <td>
                           <Link to="/Login"><button type="button" class="btn btn-default" aria-label="Left Align">
                              <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                            </button></Link>&nbsp;&nbsp;
                            <button type="button" class="btn btn-default" aria-label="Left Align">
                              <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            </button></td>                        
                    </tr>
                  ))}  
                </tbody>
            </table>
        </div>
      <div class="col-md-2"></div>
    </div>
  
  )      

 
  
}

export default AdministradorNoticias;
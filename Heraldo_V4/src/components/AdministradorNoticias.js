import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './administradornoticias.css'
import axios from 'axios';
import swal from 'sweetalert';

const AdministradorNoticias = () => {

  const [noticias,setNoticias] = useState([])

  const administradorNoticias = async () => {      
   await axios.get('http://localhost:5000/api/v1/noticia/')
      .then(res => {        
        if (res.status == 200) {
          setNoticias(res.data);           
        } else {
          swal("Error", "Error internal server", "error");
        }
      })
  }

  useEffect(() => {
    administradorNoticias()    
  }, [])

  return (   
    <div class="row">
       <div class="col-md-1"></div>
        <div class="col-md-10">
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
                {noticias.map((noticiaselect, index) => (  

                    <tr data-index={index} >
                        <td>{noticiaselect.id}</td>
                        <td>{noticiaselect.titulo}</td>
                        <td>{noticiaselect.descripcion}</td>
                        <td>{noticiaselect.usuario}</td>
                        <td>{noticiaselect.visible == 1 ? "SI" : "NO"}</td>
                        <td>{noticiaselect.fecha_creacion}</td>
                        <td>{noticiaselect.categoria}</td>
                        <td>{noticiaselect.hora_noticia}</td>
                        <td>{noticiaselect.resumen}</td>
                        <td style={{textAlign:"center"}}>
                          <img width="50" src={noticiaselect.imagen}></img></td>                               
                        <td>
                           <Link key={index} noticiaselect={noticiaselect} to="/EditNoticia"><button type="button" class="btn btn-default" aria-label="Left Align">
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
      <div class="col-md-1"></div>
    </div>
  
  )      

 
  
}

export default AdministradorNoticias;
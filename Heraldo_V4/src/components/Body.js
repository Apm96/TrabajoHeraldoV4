import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Body = () => {

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
                    
                 </thead>
                 <tbody>
                 { noticias.map((noticia, index) => ( 
                     
                     
 
                     <tr data-index={index} >
                         <td>{noticia.titulo}</td>
                        
                         <td>{noticia.resumen}</td>
                         <td style={{textAlign:"center"}}>
                           <img width="50" src={noticia.imagen}></img></td>                               
                         <td>
                            <Link to="/Login"><button type="button" class="btn btn-default" aria-label="Left Align">
                               <span aria-hidden="true">Ver noticia</span>
                             </button></Link>&nbsp;&nbsp;
                             </td>                        
                     </tr>
                   ))}  
                 </tbody>
             </table>
         </div>
       <div class="col-md-1"></div>
     </div>
   
   )      
    
}      
  
export default Body;
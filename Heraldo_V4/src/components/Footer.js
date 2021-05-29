import React from 'react';
import './footer.css'

const Footer = ({fecha}) => {
    return ( 
        <footer style={{backgroundColor: 'black', color: 'white !important'}}>
            <center>
                <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i
                            class="icon ion-social-snapchat"></i></a><a href="#"><i
                            class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a>
                </div>
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Telefono: 035 3789862</a></li>
                    <li class="list-inline-item"><a href="#">Direccion: Cra 20 # 70-69 - Barranquilla(Atlántico) - Colombia</a></li>
                    <li class="list-inline-item"><a href="#">Fax: 3579872</a></li>
                    <li class="list-inline-item"><a href="#">Sitio Web: https://www.elheraldo.co/</a></li>
                </ul>
                <p class="copyright">El Heraldo © {fecha}</p>
            </center>
        </footer>
    )
}

export default Footer;
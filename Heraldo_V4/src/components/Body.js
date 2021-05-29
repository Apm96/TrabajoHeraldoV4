import React from 'react';
import Noticia from '../img/Noticia.jpg';
import Noticia2 from '../img/Noticia2.jpg';
import Noticia3 from '../img/Noticia3.jpg';
import Noticia4 from '../img/Noticia4.jpg';
import Noticia5 from '../img/Noticia5.jpg';

const Body = () => {
    return (    
        <div class="row">
            <div class="col-md-12">
            <h2 class="text-center"><b>EL HERALDO</b></h2>
                <hr></hr>
                <div class="row">
                    <marquee style={{fontSize: "11px", textAlign:"center"}}>
                        <div class="col-md-3">
                            <div class="alert alert-warning" role="alert">
                                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                <span class="sr-only">Advertencia:</span>
                                <b>¡El uso obligatorio del tapabocas es una decision de todos!</b>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="alert alert-info" role="alert">
                                <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                                <span class="sr-only">Información:</span>
                                <b>Enterese de los nuevos cambios del subsidio del gobierno</b>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="alert alert-success" role="alert">
                                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                <span class="sr-only">Lo bueno:</span>
                                <b>¡Empezo la jornada de vacunación de la Etapa 1!</b>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="alert alert-danger" role="alert">
                                <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
                                <span class="sr-only">Cuidado:</span>
                                <b>¡El Covid 19 es mortal en personas de la tercera edad !</b>
                            </div>
                        </div>
                    </marquee>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        &nbsp;
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <section>
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 style={{padding: "10px;"}}><b>ONU pide contención tras el bombardeo de
                                                    EE.UU. en Siria</b></h4>
                                        </div>
                                        <div class="panel-body">
                                            <p style={{padding: "10px;"}} class="text-justify text-left">
                                                El secretario general de la ONU, António Guterres, pidió este viernes
                                                contención
                                                a todas
                                                las
                                                partes tras
                                                el ataque aéreo lanzado por Estados Unidos contra milicias proiraníes
                                                iraquíes
                                                en el
                                                este de
                                                Siria.

                                                Según su portavoz, Stéphane Dujarric, Guterres está siguiendo de cerca
                                                lo
                                                ocurrido y
                                                está
                                                “preocupado
                                                por la volátil situación en la región”.

                                                El jefe de Naciones Unidas llama “a todas las partes a ejercer
                                                contención y a
                                                evitar una
                                                escalada” de
                                                las hostilidades, señaló Dujarric preguntado en su conferencia de prensa
                                                diaria.

                                                Los bombardeos lanzados este jueves fueron ordenados por el presidente
                                                de
                                                EE.UU., Joe
                                                Biden,
                                                en
                                                respuesta a los recientes ataques con cohetes de los últimos días contra
                                                bases y
                                                objetivos
                                                estadounidenses en Irak.

                                                Según el Observatorio Sirio de Derechos Humanos con sede en Londres y
                                                que tiene
                                                una
                                                amplia
                                                red de
                                                colaboradores sobre el terreno, en el ataque estadounidense, llevado a
                                                cabo en
                                                la
                                                provincia
                                                de Deir al
                                                Zur, en el este de Siria, murieron al menos 22 combatientes de las
                                                milicias
                                                proiraníes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">Siria</div>
                                        <div class="panel-body">
                                            <img style={{padding: "10px"}} width="280" src={Noticia} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-md-6">
                        <section>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">Control de vacunación </div>
                                        <div class="panel-body">
                                            <img class="center" style={{padding: "10px"}}  width="300"
                                                src={Noticia2} />
                                            <img class="center" style={{padding: "10px"}}  width="300"
                                                src={Noticia3} />
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 style={{padding: "10px"}} ><b>Invima autoriza uso de las vacunas que estaban
                                                    en cuarentena</b></h4>
                                        </div>
                                        <div class="panel-body">
                                            <p style={{padding: "10px"}}  class="text-justify text-left">
                                                En el programa ‘Prevención y Acción’ el viceministro de salud, Luis
                                                Alexander
                                                Moscoso, anunció que el Invima autorizó el uso de las 5.777 dosis de
                                                vacunas de
                                                la farmacéutica Sinovac que estaban en cuarentena y que este sábado se
                                                retomaría
                                                el plan de vacunación en el Tolima.

                                                Asimismo, aseguró que “Hasta el momento va un porcentaje de pérdida del
                                                0,14% de
                                                las dosis, aunque es un porcentaje bajo, estamos buscando disminuir ese
                                                margen”.

                                                Moscoso agregó que en el país ya se han aplicado 81.333 dosis y que del
                                                primer
                                                lote que llegó al país -50.000 dosis de Pfizer- ya estamos en un
                                                porcentaje de
                                                vacunación superior al 99%.

                                                El viceministro también informó que entre el 3 y 5 de marzo llegarán al
                                                país
                                                100.002 dosis de vacunas de Pfizer adicionales a las 117.000 que había
                                                anunciado
                                                el presidente Iván Duque en la Cumbre de Gobernadores.
                                            </p>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </section>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <section>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 style={{padding: "10px"}} ><b>Muertes por covid siguen a la baja en el Atlántico</b></h4>
                                </div>
                                <div class="panel-body">
                                    <img class="center" style={{padding: "10px"}}  width="600" src={Noticia4} />                                    
                                    <p style={{padding: "10px"}}  class="text-justify text-left">
                                        El número de casos covid en el país sigue fluctuando.

                                        Este viernes el país reportó 3.567 casos nuevos, 292 de ellos en el Atlántico
                                        (146 en
                                        Barranquilla).

                                        En cuanto a los fallecidos, el departamento continúa a la baja al reportar cero
                                        muertes
                                        en los municipios y 2 en Barranquilla.
                                        En el resto del país fueron 122 los fallecidos, 110 de ellos pertenecientes a
                                        días
                                        anteriores.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-md-6">
                        <section>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 style={{padding: "10px"}} ><b>¿Cómo funcionan las vacunas anticovid?</b></h4>
                                </div>
                                <div class="panel-body">
                                    <img class="center" style={{padding: "10px"}}  width="600" src={Noticia5}/>
                                    <p style={{padding: "10px"}}  class="text-justify text-left">
                                        Por definición, las vacunas son medicamentos que ayudan al cuerpo humano a
                                        desarrollar
                                        inmunidad contra los virus o las bacterias, sin que para ello se deba contraer
                                        la
                                        enfermedad.

                                        Como explican los Centros para el Control y Prevención de Enfermedades de
                                        EE.UU., cuando
                                        gérmenes como el virus que causa la covid-19 atacan al organismo, estos se
                                        multiplican y
                                        causan una invasión, conocida como infección, que activa herramientas del
                                        sistema
                                        inmunitario para combatirla, sobre todo glóbulos blancos.

                                        Entre ellos, están los macrófagos, glóbulos que absorben y digieren los gérmenes
                                        y que
                                        dejan antígenos, o pequeñas partes de los invasores que son identificados como
                                        peligrosas y que estimulan la creación de anticuerpos.

                                        También entran en acción los linfocitos B, que producen anticuerpos que atacan
                                        las
                                        partes del virus que dejaron atrás los macrófagos, y los linfocitos T, que
                                        atacan a las
                                        células del organismo que ya están infectadas.

                                        "La primera vez que una persona se infecta con el virus que causa la covid-19,
                                        su cuerpo
                                        puede demorar varios días o semanas en desarrollar y usar todas las herramientas
                                        necesarias para combatir los gérmenes y vencer la infección", recuerdan los CDC.

                                        En este punto, las vacunas anticipan este proceso ayudándole al cuerpo a
                                        reconocer los
                                        antígenos del coronavirus, suministrando -bajo diversas técnicas- partes del
                                        virus,
                                        versiones modificadas del mismo o "instrucciones" para crear una reacción
                                        inmunitaria.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3>Top Cifra de contagios Covid 19 en Colombia</h3>
                        <div class="progress">
                            <span><b>&nbsp;Bogota</b></span>
                            <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "49%"}}>661,916.00
                                <span class="sr-only"> 40% Complete (success)</span>
                            </div>
                        </div>
                        <div class="progress">
                            <span><b>&nbsp;Antioquia</b></span>
                            <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar"
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "26%"}}>347,316.00
                                <span class="sr-only">20% Complete</span>
                            </div>
                        </div>
                        <div class="progress">
                            <span><b>&nbsp;Valle del Cauca</b></span>
                            <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "14%"}}>197,188.00
                                <span class="sr-only">60% Complete (warning)</span>
                            </div>
                        </div>
                        <div class="progress">
                            <span><b>&nbsp;Atlantico</b></span>
                            <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "9%"}}>124.867.00
                                <span class="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
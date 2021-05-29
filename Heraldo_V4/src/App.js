import React , {Fragment } from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.js'
import Body from './components/Body.js'
import Login from './components/Login.js'
import Register from './components/Register'
import AdministradorNoticias from './components/AdministradorNoticias'
import CreateNoticia from './components/CreateNoticia';

import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from './img/el-heraldo-logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const fecha = new Date().getFullYear();
  return (
    <div class="container-fluid">      
    <Router>
    <nav class="navbar navbar-default" data-spy="affix" data-offset-top="197">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="ejercicio1.html"><img style={{paddingBottom: '0px !important' }} width="200"
                            src={logo}></img></a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                          <Link to="/login">
                            <a data-toggle="popover" title="Iniciar sesion" data-placement="bottom"
                                data-content="Notificaciones"><span class="glyphicon glyphicon-user"
                                    aria-hidden="true"></span></a></Link>
                                    </li>
                        <li><a data-toggle="popover" title="Informacion" data-placement="left" data-content="Ayuda"
                                href="#"><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span></a></li>
                    </ul>
                </div>
   </nav>
    <div class="row">
      <div class="col-md-12">
      <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/AdministradorNoticias">
            <AdministradorNoticias />
          </Route>
          <Route path="/CreateNoticia">
            <CreateNoticia />
          </Route>
          <Route path="/">
            <Body />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
 
     
      {/* <Body></Body> */}
      <Footer fecha={fecha} />
    </div>
  );
}

export default App;

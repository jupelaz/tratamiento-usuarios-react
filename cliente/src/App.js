import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './pages/Start';
import Empleados from './pages/Empleados';
import Empresas from './pages/Empresas';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Logout from './pages/Logout';
//import 'antd/dist/antd.min.css';
import './App.css';
// import { Layout, Menu, ConfigProvider } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
// import esES from 'antd/es/locale/es_ES';

// const { Header, Content, Footer } = Layout;
// const { SubMenu } = Menu;

function requireAuth(nextState, replace) { 
  //if (!loggedIn()) {
  if (false){
    replace({
      pathname: '/login'
    })
  }
}


const App = () => (

<div className="App">
  
  <div className="App-header">
    <nav id="menu">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="">Técnicos</a></li>
        <li><a href="">Usuarios</a></li>
        <li><a href="">Citas</a>
          <ul>
            <li><a href="">Agenda</a></li>
            <li><a href="">Calendarios</a></li>
            <li><a href="">Ciclos</a></li>
          </ul>
        </li>
        <li><a href="">Tablas</a>
          <ul>
            <li><a href="">Especialidades</a></li>
            <li><a href="">Incidencias</a></li>
            <li><a href="">Tipos de Evento</a></li>
            <li><a href="">Tratamientos</a></li>
            <li><a href="/empleados">Empleados</a></li>
            <li><a href="/empresas"> Empresas</a></li>
          </ul>
        </li>
        <li><a href="">Cerrar sesión</a></li>
      </ul>
    </nav>
  </div>
  <div className="site-layout-content">
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/empleados" component={Empleados} onEnter={requireAuth}/>
        <Route exact path="/empresas" component={Empresas} onEnter={requireAuth}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
  <div className="site-layout-footer">
        Atención a usuarios ©2020 Created by Lurconis
  </div>
</div>
);



export default App;
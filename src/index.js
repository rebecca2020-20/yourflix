import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import NotFound from './pages/notfound404';



ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo} exact/>
    <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
    <Route component={NotFound}/>
  </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


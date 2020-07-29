import React from 'react';
import './App.css';
import {Member} from './pages'
import Greeting from './components/Greeting'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Info from './components/Signin'
import HideTest from "./components/HideTest";
import CounterComponent from "./containers/CounterComponent";
import CounterContainer from "./containers/CounterContainer";
const App = ()=> {
  return (
      <div className="app"><CounterContainer/></div>

  );
}

export default App;

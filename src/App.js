import logo from './logo.svg';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login';

import Dashboard from './components/dashboard';
import Myclient from './components/client';

function App() {
  return (


    <HashRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/client" element={<Myclient/>} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </HashRouter>

  );
}

export default App;
/* Login */




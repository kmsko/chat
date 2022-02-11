import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllForm from './components/authorization/Authorization';
import Registration from './components/registration/Registration';
import Repass from './components/repass/Repass';

function App() {
  const signIn = {
    type: "Sign In",
    titel: "titel Sign In",
    email: "email",
    password: "password",
    link: {
      restartPass: "re_pass",
      registration: "registration"
    }
  }

  return (
    <div>
      <header>
        <Link to={'/'}>Home </Link>
        <Link to={'signin'}> Войти</Link>
      </header>
      <div className='dynamic_conten'>
        <Routes>
          <Route path='/SignIn' element={<AllForm typeForm={signIn}/> }/>
          <Route path='/restartpass' element={<Repass /> }/>
          <Route path='/registration' element={<Registration /> }/>
        </Routes>
      </div>
    </div >

  );
}

export default App;

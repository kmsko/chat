import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllForm from './components/Form/AllForm';
import door from './assets/formIcon/door.png'

function App() {

  const { titelSignIn, titelRegistration, titelRestorePassword } = {
    titelSignIn: {
      text: "image"
    },
    titelRegistration: {
      text: "Регистрация"
    },
    titelRestorePassword: {
      text: "Восстановление пароля"
    }
  }

  const { linkRestorePassword, linkSignIn, linkRegistration } = {
    linkRestorePassword: {
      text: "Забыли пароль?",
      url: "/restorepassword"
    },
    linkSignIn: {
      text: "Войти",
      url: "/signin"
    },
    linkRegistration: {
      text: "Регистрация",
      url: "/registration"
    }
  }

  const { buttonRegistration, buttonSignIn, buttonRestorePasswrod } = {
    buttonRegistration: {
      text: "Регистрация",
    },
    buttonSignIn: {
      text: "Войти"
    },
    buttonRestorePasswrod: {
      text: "Восстановить пароль"
    }
  }

  const { InputName, InputSurname, InputEmail, InputPassword, InputRepeatPassword } = {
    InputName: {
      type: "name",
      placeholder: "Имя"
    },
    InputSurname: {
      type: "surname",
      placeholder: "Фамилия"
    },
    InputEmail: {
      type: "email",
      placeholder: "E-mail"
    },
    InputPassword: {
      type: "password",
      placeholder: "Введите пароль"
    },
    InputRepeatPassword: {
      type: "password",
      placeholder: "Повторите пароль"
    }
  }



  return (
    <div className='container'>
      <header className='header'>
        <Link to={'/'}>Home </Link>
        <button className='button_login'>
          <Link
            className='button_login_text'
            to={'/signin'}> Войти </Link>
          <img src={door} alt="#" />
        </button>
      </header>
      <div className='dynamic_conten'>
        <Routes>
          <Route path='/signin' element={<AllForm
            titel={titelSignIn}
            input={{ InputEmail, InputPassword }}
            link={{ linkRestorePassword, linkRegistration }}
            button={buttonSignIn}
          />} />
          <Route path='/registration' element={<AllForm
            titel={titelRegistration}
            input={{ InputName, InputSurname, InputEmail, InputPassword, InputRepeatPassword }}
            link={{ linkRestorePassword, linkSignIn }}
            button={buttonRegistration}
          />}
          />
          <Route path='/restorepassword' element={<AllForm
            titel={titelRestorePassword}
            input={{ InputEmail, InputPassword, InputRepeatPassword }}
            link={{ linkRegistration, linkSignIn }}
            button={buttonRestorePasswrod}
          />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;

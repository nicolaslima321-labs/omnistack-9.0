import React, { useState } from 'react';
import api from './services/api.js';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    const response = await api.post('/sessions', {
      email: email
    });

    
  }

  return (
    <div className="container">
      <img src={logo} alt="aircnc" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value = {email}
            onChange={function(event){
              setEmail(event.target.value)
            }}
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

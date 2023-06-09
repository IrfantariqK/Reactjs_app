import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: Name,
          email: Email,
          password: Password
        })
      });
      const data = await result.json();
      console.log(data);
      window.location.replace("/login");
    }
    catch (err) {
      alert("Invalid");
    }
  }

  return (
    <div className="register-page">
       <header>
        <h1>Register</h1>
      </header>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Name:
          <input type="text" value={Name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={Email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

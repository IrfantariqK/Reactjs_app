import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
      const result = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: Email,
          password: Password
        })
      });
      const data = await result.json();
      console.log(data);
      localStorage.setItem("Token", data.Token);

      window.location.replace("/");

    } catch (err) {
      alert("Invalid");
    }
  }

  return (
    <div className="login-page">
      <header>
        <h1>Login</h1>
      </header>
      <form onSubmit={HandleSubmit} className="login-form">
        <label htmlFor="email">Email</label>
        <input id="email" placeholder="Email" value={Email} onChange={(e) => { SetEmail(e.target.value) }} />
        <label htmlFor="password">Password</label>
        <input id="password" placeholder="Password" value={Password} onChange={(e) => { SetPassword(e.target.value) }} />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

import React, { useState } from "react";

function Register() {
  const [user, setUser] = useState({ username: "", password: "" });

  const register = async () => {
    await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    alert("Registered Successfully");
    window.location.href = "/";
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <input placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })} />

      <input type="password" placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })} />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
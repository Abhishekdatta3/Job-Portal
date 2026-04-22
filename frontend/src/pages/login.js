import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });

  const login = async () => {
    const res = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const text = await res.text();
    alert(text);

    if (text === "Login Success") {
      window.location.href = "/home";
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })} />

      <input type="password" placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })} />

      <button onClick={login}>Login</button>

      <p onClick={() => (window.location.href = "/register")}
         style={{ color: "blue", cursor: "pointer" }}>
        Go to Register
      </p>
    </div>
  );
}

export default Login;
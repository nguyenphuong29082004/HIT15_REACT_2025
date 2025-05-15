import React from "react";
import "./Login.scss";
function Login() {
  return (
    <div className="container-login">
      <div className="login">
        <h2>Login</h2>
        <form action="">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
        <button>Login</button>
        <p>
          Don't have an account? <span>Regiter</span>
        </p>
        <div className="wrapper">
        <div className="close">
        <span></span>
        <span></span>
        </div>
      </div>
      </div>
      
     
      
    </div>
  );
}

export default Login;

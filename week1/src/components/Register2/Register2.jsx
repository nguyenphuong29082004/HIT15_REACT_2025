import React from 'react'
import "./Register2.scss"
function Register2() {
    return (
        <div className="container-register2">
          <div className="register2">
            <h2>Register</h2>
            <form action="">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
            <button>Register</button>
            <p>
              Don't have an account? <span>Login</span>
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

export default Register2
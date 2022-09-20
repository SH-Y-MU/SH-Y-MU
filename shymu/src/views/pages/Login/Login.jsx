
import React, { useState } from "react";
import './Login.css'
import Dashboard from "../Dashboard/Dashboard";




function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    }
  ];

  const errors = {
    uname: "Wrong username",
    pass: "Wrong password"
  };

  const handleLogin = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {

        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (

    <form className='singInForm' onSubmit={handleLogin}>
      <h1>Let's get you in!</h1>
      <div>
        <input type="text" placeholder="username" name="uname" required /> <br></br>
        {renderErrorMessage("uname")}
        <input placeholder="password" type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div>
        <button type="submit" className="logIn">LogIn</button>
        <h6>Don't have an account?<span style={{ color: '#7E98F4' }}> Sign up</span></h6>
      </div>
    </form>

  );

  /* Redirection location when user is correct. Change later */
  return (
    <div className="login-form">
      {isSubmitted ?
        <Dashboard />
        : renderForm}
    </div>

  );
}

export default App;
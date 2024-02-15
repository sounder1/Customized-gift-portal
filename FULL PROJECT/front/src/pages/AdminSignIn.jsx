import React from "react";
import About from "./Navbar";
import { Link } from "react-router-dom";
function AdminSignInForm() {
  function handleClick1(){
    alert("successfully sign in")
  }
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert('You are login with email: ${email} and password: ${password}');

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
       <h1>Sign in</h1>
        
       
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>

        <About />
        <Link to='/adminpage'>
        <button onClick={handleClick1}>Sign In</button>
        </Link>
      </form>
    </div>
  );
}

export default AdminSignInForm;
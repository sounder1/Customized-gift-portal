import React from "react";
import { Link } from "react-router-dom";
function AdminSignUpForm() {
  function handleClick1(){
    alert("successfully signed up")
  }
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: ""
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

    const { name, email, password, confirmPassword, mobileNumber, role } = state;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    alert('You are sign up with Name: ${name}, Email: ${email}, Password: ${password}, Mobile Number: ${mobileNumber}, Role: ${role}');

    // Clear form fields after submission
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <>
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
       
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <input
          type="text"
          name="mobileNumber"
          value={state.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
        <div>
        </div>
        <Link to="/adminpage"><button onClick={handleClick1}>Sign Up</button></Link>
      </form>
    </div>
    </>
  );
}

export default AdminSignUpForm;
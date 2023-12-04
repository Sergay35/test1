import React from 'react';
import chair from '../../images/chair.svg';
import  style from '../signup/signUp.css';
function SignUp() {
  
  return (
    <div className="SignUp">
    <div className="container">
          <div className="left-section">
            <img src= {chair} alt="Photo"/>
          </div>
          <div className="right-section">
            <h2>Sign up</h2>
            <p>Already have an account? <a href="#">Sign in!</a></p>
                <form>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required/>
                     <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required/>

                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" required/>

                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                          <input type="password" id="password" name="password" required/>
                            <i className="eye-icon"> </i>
                        </div>

                        <label htmlFor="privacy">I agree with privacy policy and terms of use</label>
                        <input type="checkbox" id="privacy" name="privacy" required/>

                          <button type="submit">Sign Up</button>
                </form></div>
          </div>
  </div>);


}

export default SignUp;

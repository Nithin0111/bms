import React from 'react';
import Header from '../../../layout/component/Header';
import loginIl from '../../../img/5098293.jpg';
import Contact from './Contact';

function VaidateUser() {
  return (
    <div>
      <div className="login-wrapper">
        <Header />
        <h1 className="login-title">Login</h1>
        <section className="login-section">
          <div className="login-content">
            <div>
              <img src={loginIl} alt="" />
            </div>
            <div className="login-form">
              <form action="">
                <label htmlFor="email">Your email</label>
                <br />
                <input type="text" name="email" />
                <br />
                <label htmlFor="password">Your password</label>
                <br />
                <input type="password" name="password" />
                <br />
                <button type="button" className="login-submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Contact />
    </div>
  );
}

export default VaidateUser;

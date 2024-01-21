import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

const Login = () => {
  return (
    <>
      <Header />
      <div className="container mt-4 bg-orange">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-orange">
                <center>Login</center>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <br></br>
                  <center>
                    <button type="submit" className="btn btn-dark">
                      Login
                    </button>
                  </center>
                  <div className="form-group">
                    <center>
                      <a href="/" className="forgot-password-link">
                        Forgot Password?
                      </a>
                    </center>
                  </div>
                  <br></br>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Login;



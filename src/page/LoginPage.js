import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import "../style/loginstyle.css";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validEmail = (email) => {
    const re = /(.+)@(.+){2,}\.(.+){2,}/;
    return re.test(email.toLowerCase());
  };

  const validPassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = () => {
    setEmailBlurred(true);
    setPasswordBlurred(true);

    if (validEmail(email) && validPassword(password)) {
      setSubmitted(true);
      // Redirect to HomePage after a successful login
      window.location.href = 'index.html'; // Replace with the location of your homepage
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.18)' }}>
            <div className="card-body" id="form1">
              <div className="form-data" style={{ display: submitted ? 'none' : 'block' }}>
                <div className="form-group">
                  <label htmlFor="email">Email or username</label>
                  <input
                    autoComplete="off"
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`form-control ${!validEmail(email) && emailBlurred ? 'is-invalid' : ''}`}
                    onBlur={() => setEmailBlurred(true)} />
                  <div className="invalid-feedback">A valid email is required!</div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    autoComplete="off"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`form-control ${!validPassword(password) && passwordBlurred ? 'is-invalid' : ''}`}
                    onBlur={() => setPasswordBlurred(true)} />
                  <div className="invalid-feedback">Password must be at least 8 characters long!</div>
                </div>
                <div className="mb-3">
                  <button onClick={handleSubmit} className="btn btn-dark btn-block">
                    Login
                  </button>
                </div>
              </div>
              <div className="success-data" style={{ display: submitted ? 'block' : 'none' }}>
                <div className="text-center d-flex flex-column">
                  <FontAwesomeIcon icon={faCheck} style={{ fontSize: '90px' }} />
                  <span className="text-center fs-1">You have been logged in Successfully</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

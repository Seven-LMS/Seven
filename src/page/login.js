import React, { useState, useEffect } from 'react';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState(null);

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
            console.log(email)
            console.log(password)
            axios.get('http://localhost:3005/getLoginInfo/'+email)
                .then((response) => {
                    setUserData(response.data[0]);
                    console.log(response.data[0])
                    const user=response.data[0];
                    if (user.password===password){
                        window.location.href = '/HomePage?userData='+user.sid;
                    }
                    else {
                        alert("Wrong email or password");
                    }
                })
                .catch((error) => {
                    //console.error('Error fetching class:', error);
                    alert("Wrong email or password")
                });
      
      /*setSubmitted(true);
      // Redirect to HomePage after a successful login
      window.location.href = '/HomePage'; // replace with where the homepage is*/
    }
  };

  const iconStyle = {
    marginRight: '3px',
  };

  const bxsstyle = {
    fontSize: '90px',
  };

  const cardstyle = {
    boxShadow: '0px 0px 10px rgba(0,0,0,0.18)',
    textAlign: "left"
  };

  return (
    <div className="container mt-5">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={cardstyle}>
            <div className="card-body" id="form1">
              {!submitted ? (
                <div className="form-data">
                  <div className="form-group" style={{marginBottom:"10px"}}>
                    <label htmlFor="email">Email or username</label>
                    <input
                      autoComplete="off"
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`form-control ${!validEmail(email) && emailBlurred ? 'is-invalid' : ''}`}
                      onBlur={() => setEmailBlurred(true)}
                    />
                    <div className="invalid-feedback">A valid email is required!</div>
                  </div>
                  <div className="form-group" style={{marginTop:"10px", marginBottom:"10px"}}>
                    <label htmlFor="password">Password</label>
                    <input
                      autoComplete="off"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`form-control ${!validPassword(password) && passwordBlurred ? 'is-invalid' : ''}`}
                      onBlur={() => setPasswordBlurred(true)}
                    />
                    <div className="invalid-feedback">Password must be at least 8 characters long!</div>
                  </div>
                  <div className="mb-3" style={{marginTop: "10px"}}>
                    <button onClick={handleSubmit} className="btn btn-dark btn-block" style={{width: "100%"}}>
                      Login
                    </button>
                  </div>
                </div>
              ) : (
                <div className="success-data">
                  <div className="text-center d-flex flex-column">
                    <i className="bx bxs-badge-check" style={bxsstyle}></i>
                    <span className="text-center fs-1">
                      You have been logged in <br /> Successfully
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
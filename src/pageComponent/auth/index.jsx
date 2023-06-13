import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="nav nav-pills nav-justified mb-3 mt-3">
              <button
                className={`nav-link border-0 ${showLogin && 'active'}`}
                onClick={() => setShowLogin(true)}
                id="tab-login">
                Login
              </button>
              <button
                className={`nav-link border-0 ${!showLogin && 'active'}`}
                onClick={() => setShowLogin(false)}
                id="tab-register">
                Register
              </button>
            </div>
            <div className="tab-content">
              <div className={`tab-pane fade ${showLogin && 'show active'}`} id="pills-login">
                <Login />
              </div>
              <div className={`tab-pane fade ${!showLogin && 'show active'}`} id="pills-register">
                <Register />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

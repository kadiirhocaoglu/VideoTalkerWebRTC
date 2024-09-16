import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { setUsername } from '../../store/actions/dashboardActions';
import { connect } from 'react-redux';
import { registerNewUser } from '../../utils/wwsConnection';

const LoginPage = ({ saveUsername }) => {
    const [username, setUsername] = useState('');
  
    const navigator = useNavigate();
  
    const handleSubmitButtonPressed = () => {
      registerNewUser(username);
      saveUsername(username);
      navigator('/dashboard');
    };
  
    return (
        <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <button onClick={handleSubmitButtonPressed} className="login-button">
            Login
          </button>
        </div>
      </div>
    );
  };
  
  const mapActionsToProps = (dispatch) => {
    return {
      saveUsername: username => dispatch(setUsername(username))
    };
  };
  
  export default connect(null, mapActionsToProps)(LoginPage);

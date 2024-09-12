import React, { useState } from 'react';
import './login.css';
import UsernameInput from './components/usernameInput';
import SubmitButton from './components/submitButton';
import UsernameLabel from './components/usernameLabel';
import { useNavigate } from 'react-router-dom';
import { setUsername } from '../../store/actions/dashboardActions';
import { connect } from 'react-redux';
import { registerNewUser } from '../../utils/wwsConnection';
import { getActiveUsers } from '../../utils/wwsConnection';

const Login = ({ saveUsername }) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmitButtonPressed = () => {
        registerNewUser(username);
        saveUsername(username);
        getActiveUsers();
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">WeePay</h1>
                <h6 className="login-title">Login to WeeTalk</h6>
                <form className="login-form">
                    <UsernameLabel />
                    <UsernameInput username={username} setUsername={setUsername} />
                    <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
                </form>
            </div>
        </div>
    );
};


const mapActionToProps = (dispatch) => {
    return {
        saveUsername: (username) => dispatch(setUsername(username)),
    };
};


export default connect(null, mapActionToProps)(Login);

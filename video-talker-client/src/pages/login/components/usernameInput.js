import React from 'react'
import '../login.css'
const usernameInput = (props) => {
  const { username, setUsername } = props;
  return (
 
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="login-input"
        required
      />
  
  )
}

export default usernameInput
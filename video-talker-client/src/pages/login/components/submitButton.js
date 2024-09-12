import React from 'react'
import '../login.css'

const submitButton = ({handleSubmitButtonPressed}) => {
  return (
  
        <button type="submit" className="login-button" onClick={handleSubmitButtonPressed}>
            Start using WeeTalk
        </button>

  )
}

export default submitButton
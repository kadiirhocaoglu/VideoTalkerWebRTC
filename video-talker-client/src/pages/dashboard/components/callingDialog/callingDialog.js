import './callingDialog.css';

import React from 'react'

const callingDialog = () => {
  return (
    <div className="calling-container">
    <h2>Calling...</h2>
    <div className="calling-animation">
      {/* Buraya arama sırasında bir animasyon ekleyebilirsin */}
    </div>
    <button className="end-call-button">End Call</button>
  </div>
  )
}

export default callingDialog
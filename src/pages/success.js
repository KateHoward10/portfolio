import React from "react"
import { FaPaperPlane, FaArrowLeft } from "react-icons/fa"

function Success() {
  return (
    <div className="success-notification">
      <h3>
        Thanks! Your message has been sent. <FaPaperPlane />
      </h3>
      <a href="/" className="link-container">
        <FaArrowLeft /> Go back
      </a>
    </div>
  )
}

export default Success

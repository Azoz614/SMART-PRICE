import './OTP.css'
import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import Navbar from '../Navbar/Navbar'

function OTP() {
  return (
    <>
      <main className="otp-page">
        <section className="otp-card" aria-labelledby="otp-title">
          <div className="otp-icon" aria-hidden="true"><ShieldCheck /></div>

          <div className="otp-heading">
            <span>Account verification</span>
            <h1 id="otp-title">Enter verification code</h1>
            <p>We sent a six-digit verification code to your WhatsApp number.</p>
          </div>

          <form className="otp-form">
            <div className="otp-inputs" aria-label="Six-digit verification code">
              {Array.from({ length: 6 }, (_, index) => (
                <input key={index} type="text" inputMode="numeric" maxLength="1" aria-label={`Digit ${index + 1}`} />
              ))}
            </div>
            <p className="otp-hint">Didn't receive the code? <button type="button">Resend code</button></p>
            <button className="otp-submit" type="button">Verify account</button>
          </form>

          <p className="otp-back"><Link to="/create">Change WhatsApp number</Link></p>
        </section>
      </main>
    </>
  )
}

export default OTP

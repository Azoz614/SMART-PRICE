import { useState } from 'react'
import './login.css'
import GoogleIcon from '../Google/Google'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => event.preventDefault()

  return (
    <>
      <Navbar />
      <main className="login-page">
      <section className="login" aria-labelledby="login-title">
  
        <div className="login-form">
          <div className="login-heading">
            <span>Welcome back</span>
            <h1 id="login-title">Sign in to SmartPrice</h1>
            <p>Track prices, save favorites, and shop smarter.</p>
          </div>
          <button className="google-button" type="button"><GoogleIcon /> Continue with Google</button>
          <div className="divider"><span>or</span></div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" autoComplete="email" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <div className="password-label"><label htmlFor="password">Password</label><a href="#forgot">Forgot password?</a></div>
            <div className="password-field">
              <input id="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required />
              <button type="button" onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
            <button className="submit-button" type="submit">Sign in</button>
          </form>
          <p className="signup-copy">New here? <Link to="/create">Create an account</Link></p>
        </div>
      </section>
      </main>
    </>
  )
}

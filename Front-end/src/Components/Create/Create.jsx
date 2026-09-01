import React from 'react'
import './Create.css'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'

function Create() {
  return (
    <main className="create-page">
        <section className="create">
            <div className="logo">
                <img src={logo} alt="SmartPrice" className="create-logo" />
            </div>
            <div className="create-form">
                <div className="create-heading">
                    <h1>Create an account</h1>
                    <p>Join SmartPrice to track prices, save favorites, and shop smarter.</p>
                </div>
                <form>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" autoComplete="name" placeholder="John Doe"/>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" autoComplete="email" placeholder="name@example.com" />
                    <label htmlFor="password">Password</label>
                    <label htmlFor="whatsapp-number">WhatsApp Number</label>
                    <input id="whatsapp-number" type="tel" autoComplete="tel" placeholder="123-456-7890" />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" autoComplete="new-password" placeholder="Enter your password" />
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input id="confirm-password" type="password" autoComplete="new-password" placeholder="Confirm your password" />
                    <button className="submit-button" type="submit">Create account</button>

                </form>
                <div className="login-link">
                    <p>Already have an account? <Link to="/login">Log in</Link></p>
                </div>
            </div>

        </section>
    </main>

  )
}

export default Create
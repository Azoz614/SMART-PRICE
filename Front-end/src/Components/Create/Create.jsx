import React from 'react'
import './Create.css'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Create() {
    const navigate =useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/otp');
      }
  return (
    <>
      <Navbar />
    
    <main className="create-page">
        
        <section className="create">
            
            <div className="create-form">
                <div className="create-heading">
                    <h1>Create an account</h1>
                    <p>Join SmartPrice to track prices, save favorites, and shop smarter.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" autoComplete="name" placeholder="John Doe"/>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" autoComplete="email" placeholder="name@example.com" />
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

    </>

  )
}

export default Create

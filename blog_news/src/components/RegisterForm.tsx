'use client'

import { useState } from 'react'
import { signup } from '../utlis/auth'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await signup(email, password)
      // Handle successful registration
    } catch (error) {
      // Handle registration error
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Registration form fields */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
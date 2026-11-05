import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {

    const [email, setEmail] = useState('');

    const loginEmail = () => {
        axios.post('')
    }

    return (
        <div>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={loginEmail}>post</button>
        </div>
    )
}

export default Login
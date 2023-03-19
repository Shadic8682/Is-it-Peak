import { React, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Signup ({updateUser}) {
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const [errors, setErrors] = useState([])
    const { name, username, email, password, confirm_password } = formData

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            username,
            email,
            password,
            confirm_password
        }
        if (password === confirm_password) {
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => {
                if (res.ok) {
                    fetch(`/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => {
                            if (res.ok) {
                                res.json().then(user => {
                                    updateUser(user)
                                    navigate(`/`)
                                })
                            } else {
                                res.json().then(json => setErrors(json.errors))
                            }
                        })
                } else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })
        } else setErrors(['Passwords must match!'])
    }
    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className='w-full max-w-xs'>
            <h2 className='text-xl'>Create your Account</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <input placeholder="Name" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='name' value={name} onChange={changeHandler} />
                <input placeholder="Username" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='username' value={username} onChange={changeHandler} />
                <input placeholder="Email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='email' value={email} onChange={changeHandler} />
                <input placeholder="Password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='password' value={password} onChange={changeHandler} />
                <input placeholder="Confirm Password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='confirm_password' value={confirm_password} onChange={changeHandler} />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;
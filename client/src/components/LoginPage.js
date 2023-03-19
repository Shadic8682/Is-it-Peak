import React from 'react';
import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function Login ({updateUser}) {
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const { username, password } = formData

    function submitHandler(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch(`/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
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
    }
    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const clickHandler = (e) =>{
        navigate('/signup')
    }

    return (
        <div className='flex justify-content-center'>
        <div id='login-container' className='w-full max-w-xs'>
            <h1 className='text-2xl'>Please Log In</h1>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={submitHandler}>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Username
                </label>
                <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder="Username" name='username' value={username} onChange={changeHandler} />
                <br /> <br />
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Password
                </label>
            
                <input type='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder="Password" name='password' value={password} onChange={changeHandler} />
                <br />

                <input type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' value='Log In' />
            </form>
            {errors ? <div>{errors}</div> : null}
            <br />
            <br />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={clickHandler}>Don't have an account? Click Me!</button>
        </div>
        </div>
    )
}
export default Login;
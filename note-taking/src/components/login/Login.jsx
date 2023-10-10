import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.css'
export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state)
    const [login, setLogin] = useState(true)
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [registerData, setregisterData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const dataHandle = (e) => {

        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const dataHandle1 = (e) => {
        setregisterData({ ...registerData, [e.target.name]: e.target.value })
    }
    const register = async () => {
        const { data } = await axios.post('http://localhost:8000/api/register', registerData)
        if (data.success) {
            dispatch({ type: "Login", payload: registerData.email })
            navigate('/')
        } else {
            alert("register failed")
        }
    }
    return (
        <div className='login_comp'>
            {
                login ? <div className="login_part">
                    <div className="login_head">Login</div>
                    <div className="login_email_name">Enter your email</div>
                    <div className="login_email">
                        <input type="email" name="email" value={loginData.email} onChange={dataHandle} />
                    </div>
                    <div className="login_password_name">Enter your password</div>
                    <div className="login_password">
                        <input type="password" name="password" value={loginData.password} onChange={dataHandle} />
                    </div>
                    <div className="login_submit">
                        <button>Login</button>
                    </div>
                    <div className="register">
                        <button onClick={() => {
                            setLogin(false)
                        }}>Register</button>
                    </div>
                </div> : <div className="register_part">
                    <div className="register_head">Register</div>
                    <div className="register_name_name">Enter your name</div>
                    <div className="register_name">
                        <input type="text" name="name" value={registerData.name} onChange={dataHandle1} />
                    </div>
                    <div className="register_email_name">Enter your email</div>
                    <div className="register_email">
                        <input type="text" name="email" value={registerData.email} onChange={dataHandle1} />
                    </div>
                    <div className="register_password_name">Enter your password</div>
                    <div className="register_password">
                        <input type="text" name="password" value={registerData.password} onChange={dataHandle1} />
                    </div>
                    <div className="register_submit">
                        <button onClick={register}>Register</button>
                    </div>
                    <div className="login">
                        <button onClick={() => {
                            setLogin(true)
                        }}>Login</button>
                    </div>
                </div>
            }

        </div>
    )
}

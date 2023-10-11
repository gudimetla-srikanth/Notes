import React, { useState } from 'react'
import './nav.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate()
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const logoutHandle = () => {
        dispatch({ type: "Logout", payload: "" })
    }
    const handle = async () => {
        navigate('/notes')
    }
    return (
        <div className="nav">
            <div className="email">{state}</div>
            <div className="nav_notes" onClick={handle}>MyNotes</div>
            <div className="logout" onClick={logoutHandle}>Logout</div>

        </div>
    )
}

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './note.css'
export default function Note() {
    const state = useSelector(state => state)
    const [data, setData] = useState({
        title: "",
        desc: ""
    })
    const handle = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }
    const sendData = async () => {
        const object = { ...data, email: state }
        await fetch('http://localhost:8000/api/createnote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        alert("note created")
    }
    return (
        <div className="note">
            <div className="note_title">
                <input className='noteTitle' type="text" name="title" value={data.title} onChange={handle} />
            </div>
            <div className="note_desc">
                <textarea className='noteDesc' name="desc" value={data.desc} cols="30" rows="10" onChange={handle}></textarea>
            </div>
            <div className="note_submit">
                <button className='noteBtn' onClick={sendData}>Submit</button>
            </div>
        </div>
    )
}

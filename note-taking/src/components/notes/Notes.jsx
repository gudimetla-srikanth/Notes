import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './notes.css'
export default function Notes() {
    const state = useSelector(state => state)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/getnote/${state}`).then(res => setData(res.data.data))
    })
    // const handle = () => {
    //     axios.get(`http://localhost:8000/api/getnote/${state}`).then(res => setData(res.data.data))
    // }
    console.log(state)
    const deleteHandle = async (title) => {
        console.log(title)
        await axios.delete(`http://localhost:8000/api/deletenote/${state}/${title}`)
    }
    const updateHandle = async (title) => {
        const desc = prompt("enter your description")
        await axios.put('http://localhost:8000/api/updatenote', { email: state, title: title, desc: desc })
    }
    return (
        <div>
            <div className="heading" >Your Previous Notes</div>
            {data.map((data) => {
                return <div className="allnotes">
                    <div className="notes_title">{data.title}</div>
                    <div className="notes_desc">{data.desc}</div>
                    <div className="upde">
                        <div className="notes_delete" onClick={() => deleteHandle(data.title)}>Delete</div>
                        <div className="notes_update" onClick={() => updateHandle(data.title)}>Update</div>
                    </div>
                </div>
            })}
        </div>
    )
}

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function ToDoList() {
    let [txt, setTxt] = useState("")
    let [task, setTask] = useState([])

    function add (){
        if (txt){
            if (task.includes(txt.toLowerCase())) {
                toast.error("Task Already Exist")

                
            }
            else{
                setTask([...task, txt])
                setTxt("")
            }
        }
        else{
            toast.error("Task required")
        }
    }
  return (
    <div className='container'>
        <ToastContainer/>
        <h1>To do List</h1>
        <hr />
        <p>Enter Your Task</p>
        <input type="text" className='form-control my-3' value={txt} onChange={(e)=>setTxt(e.target.value)} />

        <button className='btn btn-primary my-3' onClick={add}>Add</button>

        <div>
            {
                task.map((a)=>(
                    <li>{a}</li>
                ))
            }
        </div>
    </div>
  )
}

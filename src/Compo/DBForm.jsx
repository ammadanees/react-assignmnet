import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function DBForm() {
    let [name, setName] = useState("")
    let [cnum, setCNum] = useState(0)
    let [complaint, setComplaint] = useState("")
    let [producttype, setPType] = useState("")

    let  url = "https://69dcd03d84f912a264043a93.mockapi.io/demo/customer"

    async function SaveData(){
        if (!name || !cnum || !complaint || !producttype === 0){
            toast.error("All fields are required")
            return;

        }
        await axios.post(url,{
            name, cnum, complaint, producttype
        }).then (()=>{
            toast.success("Data Saved Successfully")
            setName("")
            setCNum(0)
            setComplaint("")
            setPType("")

        }).catch((e)=>{
            toast.error(e)
        })
    }
  return (
    <div className='container'>
        <ToastContainer/>
        <h1>Customer Form</h1>
        <hr />
        <p>Enter Customer Name</p>
        <input type="text" className='form-control my-3' onChange={(e)=>setName(e.target.value)} value={name} />

        <p>Customer Phone No.</p>
        <input type="tel" className='form-control my-3' onChange={(e)=>setCNum(e.target.value)} value={cnum} />

        <p>Complaint Type</p>
        <input type="radio" value="defect" onChange={(e)=>setComplaint(e.target.value)} checked={complaint === "defect"} />&nbsp; Defect
        <input type="radio" value="wrongpackage" onChange={(e)=>setComplaint(e.target.value)} checked={complaint === "wrongpackage"} />&nbsp; Wrong Package
        <input type="radio" value="wrongsize" onChange={(e)=>setComplaint(e.target.value)} checked={complaint === "wrongsize"} />&nbsp; Wrong Size 

        <p className='my-3'>Product Type</p>
        <select className='form-select my-3' onChange={(e)=> setPType(e.target.value)}>
            <option value="" disabled selected> Select Product Type</option>
            <option value="Cloth">Cloth</option>
            <option value="Shoes">Shoes</option>
            <option value="Bag">Bag</option>
        </select>

        <button className='btn btn-primary my-3'onClick={SaveData}>Submit</button>

    </div>
  )
}

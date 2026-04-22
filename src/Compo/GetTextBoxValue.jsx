import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'


export default function GetTextBoxValue() {
    let [fname, setFname] = useState("")
    let [lname, setLname] = useState("")
    let [uemail, setUemail] = useState("")
    let [dob, setUdob] = useState("")
    let [salary, setUsalary] = useState(0)
    let [rel, setRel] = useState("")

    let [show, setisShow] = useState(false)

    function click (){
        if (fname === "" || lname === "" || uemail === "" || dob === "" || salary === "" || rel === "" ){
            toast.error("All fields are required")
            return;
        }
        setisShow(true)
    }
  return (
    <div className='container'>
        <ToastContainer/>
        <h3>Registraton Form</h3>

        <p>Enetr First Name</p>
        <input type="text" className='form-control my-3' placeholder='Enter Your First Name' onChange={(a)=>setFname(a.target.value)} value={fname} />

        <p>Enetr Last Name</p>
        <input type="text" className='form-control my-3' placeholder='Enter Your Last Name' onChange={(b)=>setLname(b.target.value)} value={lname} />

        <p>Enetr Email</p>
        <input type="email" className='form-control my-3' placeholder='Enter Email' onChange={(c)=>setUemail(c.target.value)} value={uemail} />

        <p>Date of Birth</p>
        <input type="date" className='form-control my-3' placeholder='DOB' onChange={(d)=>setUdob(d.target.value)} value={dob} />

        <p>Enter Your Salary</p>
        <input type="number" className='form-control my-3' placeholder='Enetr Salary' onChange={(e)=>setUsalary(e.target.value)} value={salary} />

        <p>Your Religion</p>
        <select className='form-select my-3' onChange={(f)=> {setRel(f.target.value)}}>
            <option value="" disabled>Select</option>
            <option value="Islam">Islam</option>
            <option value="Hindu">Hindu</option>
            <option value="Christian">Christian</option>
        </select>

        <p>Gender</p>
        <input type="radio" />



        <button className='btn btn-primary my-3' onClick={click}>Click</button>
        {
            show === true &&
        

        <div>
            First Name : {fname} <br />
            Last Name : {lname} <br />
            Email : {uemail} <br />
            DOB : {dob} <br />
            Salary : {salary} <br />
            Religion : {rel}
        </div>
}
    </div>
        
  )
}

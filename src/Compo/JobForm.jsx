import React, { useState } from 'react'


export default function JobForm() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [salary, setSalary] = useState(0)
    let [join, setJoin] = useState("")
    let [qual, setQual] = useState("")
    let [gender, setIsGender] = useState("")
    let [pos, setPos] = useState("")
    let [jobtype, setIsJob] = useState("")
    let [isCheck, setIsCheck] = useState(false)


   

  return (
    <div className='container'>
        
        <h3>Job Registraton Form</h3>

        <p>Enetr Your Name</p>
        <input type="text" className='form-control my-3' placeholder='Enter Your Name' onChange={(a)=>setName(a.target.value)} value={name} />

        <p>Enetr Email</p>
        <input type="email" className='form-control my-3' placeholder='Enter Email' onChange={(b)=>setEmail(b.target.value)} value={email} />

        <p>Expected Salary</p>
        <input type="number" className='form-control my-3' placeholder='Enter Your Expected Salary' onChange={(c)=>setSalary(c.target.value)} value={salary} />

        <p>Joining Date</p>
        <input type="date" className='form-control my-3' placeholder='joining' onChange={(d)=>setJoin(d.target.value)} value={join} />

        <p>Qualification</p>
        <select className='form-select my-3' onChange={(e)=> {setQual(e.target.value)}}>
            <option value="" disabled>Select</option>
            <option value="matric">Matric</option>
            <option value="inter">Intermediate</option>
            <option value="graduation">Graduation</option>
        </select>

        <p>Gender</p>
        <input type="radio" value="m" onChange={(f)=>setIsGender(f.target.value)} checked={gender === "m"} />
        <label>&nbsp;Male &nbsp;</label>
        <input type="radio" value="fm" onChange={(f)=>setIsGender(f.target.value)} checked={gender === "fm"} />
        <label>&nbsp;Female &nbsp;</label>
        <input type="radio" value="other" onChange={(f)=>setIsGender(f.target.value)} checked={gender === "other"} />
        <label>&nbsp;Other &nbsp;</label>

        <br /><br />
        <p>Applied for position</p>
        <select className='form-select my-3' onChange={(g)=> {setPos(g.target.value)}}>
            <option value="" disabled>Select</option>
            <option value="se">Software Developer</option>
            <option value="hr">HR Manager</option>
            <option value="finance">Finance Lead</option>
        </select>
        <br />
        <p>Job Type</p>
        <input type="radio" value="intern" onChange={(h)=>setIsJob(h.target.value)} checked={jobtype === "intern"} />
        <label>&nbsp;Intern &nbsp;</label>
        <input type="radio" value="permanent" onChange={(h)=>setIsJob(h.target.value)} checked={jobtype === "permanent"} />
        <label>&nbsp;Permanent &nbsp;</label>
        <input type="radio" value="contract" onChange={(h)=>setIsJob(h.target.value)} checked={jobtype === "contract"} />
        <label>&nbsp;Contractual &nbsp;</label>

        <br /><br />
        <input type="checkbox" value="true" onChange={(i)=>setIsCheck(i.target.value)} /> &nbsp; I Accept Terms and Conditions &nbsp;

        <br />




        <button className='btn btn-primary my-3' >Click</button>

        <div>
            Name : {name} <br />
            Email : {email} <br />
            
            Salary : {salary} <br />
            Joining Date : {join} <br />
            Qualification : {qual} <br />
            Gender: {gender} <br />
            Position: {pos} <br />
            Job Type: {jobtype} <br />
        </div>
    
    </div>
  )
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function PizzaOrder() {
    let [name, setName] = useState("")
    let [pnum, setPhone] = useState("")
    let [address, setAddress] = useState("")
    let [size, setSize] = useState("")
    let [flavor, setFlavor] = useState("")
    let [quan, setQuan] = useState(0)
    let [total, setTotal] = useState(0)
    let [tax, setTax] = useState(0)
    let [finaltotal, setFinalTotal] = useState(0)
    let [flag, setFlag] = useState(false)
    let [check, setCheck] = useState(false)

    let jao = useNavigate();

    function show(){
        if(!name || !pnum || !address){
            toast.error("All fields are required")
            return;
        }
        else{
            if (size === "s"){
                total=400 * quan
            }
            else if (size === "r"){
                total=700 * quan
            }
            else if (size === "l"){
                total = 1000 * quan
            }
            tax = total * 0.18
            setTotal(total)
            setTax(tax)

            finaltotal = total + tax
            setFinalTotal(finaltotal)
            jao("/bill",{state:{a : name, b : pnum, c : address , d : size , e : flavor, f : quan, g : total, h : tax, i : finaltotal}})
        }
        
       
    }

  return (
    <div className='container'>
        <ToastContainer/>
        <h1>Pizza Order Form</h1>
        <p>Enter Your Name</p>
        <input type="text" className='form-control my-3' onChange={(e)=>{setName(e.target.value)}} value={name} />

        <p>Enter Your Phone</p>
        <input type="tel" className='form-control my-3' onChange={(e)=>{setPhone(e.target.value)}} value={pnum}/>

        <p>Enter Your Address</p>
        <textarea className='form-control my-3' onChange={(e)=>{setAddress(e.target.value)}} value={address}></textarea>

        <p>Select Pizza Size</p>
        <input type="radio" value="s" onChange={(e)=>setSize(e.target.value)} checked={size === "s"} />&nbsp;Small&nbsp;
        <input type="radio" value="r" onChange={(e)=>setSize(e.target.value)} checked={size === "r"} />&nbsp;Regular&nbsp;
        <input type="radio" value="l" onChange={(e)=>setSize(e.target.value)} checked={size === "l"} />&nbsp;Large&nbsp;

        <p className='my-3'>Select Pizza Flavor</p>
        <select className='form-select my-3' onChange={(e)=> setFlavor(e.target.value)}>
            <option value="" disabled selected> Select Flavor</option>
            <option value="Pepperoni">Pepperoni</option>
            <option value="Fajita">Fajita</option>
            <option value="Cheese Ball">Cheese Ball</option>
            <option value="Tikka BBQ">Tikka BBQ</option>
        </select>
        <p>Quantity</p>
        <input type="number" className='form-control my-3' onChange={(e)=>{setQuan(e.target.value)}} value={quan}/>
        <input type="checkbox" onChange={(e)=> setCheck(e.target.value)} value="true" />&nbsp;I accept Terms and Conditions <br />
        <button className='btn btn-success my-3' disabled={check === false} onClick={show}>Order Now</button>

        {/* {
            flag === true && 
            <div><br />
                <h2>Username: {name} <br />
                Phone: {pnum} <br />
                Address: {address} <br />
                Pizza Size: {size} <br />
                Pizza Flavor: {flavor} <br />
                 </h2>
            </div>
        } */}


    </div>
  )
}

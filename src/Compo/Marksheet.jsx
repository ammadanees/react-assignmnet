import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function Marksheet() {
    let [total, setTotal] = useState(0)
    let [per, setPer] = useState(0)
    let [grade, setGrade] = useState("")
    let [show, setShow] = useState(false)

    function marks(){
        let english = parseFloat(prompt("Enetr your english numbers : "))
        let urdu = parseFloat(prompt("Enetr your urdu numbers : "))
        let maths = parseFloat(prompt("Enetr your maths numbers : "))

        if (english > 100 || urdu >100 || maths >100){
            toast.error("Marks can't be greater than 100",{
                "position" : "bottom-left",
                "closeButton":true,
                "pauseOnHover":true
            })
            return
        }

        let total = english + urdu + maths;
        setTotal(total)
        let per = (total * 100)/300;
        setPer(per.toFixed(2))
        let grade = "";
        if(per >= 80){
            grade = "A+"
        }
        else if(per >= 70) {
            grade = "A"
        }
        else if(per >= 60) {
            grade = "B"
        }
        else {
            grade = "Fail"
        }
        setGrade(grade)
        setShow(true)
        
    }
  return (
    <div>
        <ToastContainer/>
        <button className='btn btn-primary' onClick={marks}>
            Click Heree
        </button>
        {/* {Conditional Rendering} */}
        {show === true ?
        <div>
            <h1>Total is : {total}</h1>
            <h1>Percentage is is : {per}</h1>
            <h1>Grade is : {grade}</h1>
        </div>    
        :
        <div>
            <h2>Result will show here</h2>
        </div>
    }
    </div>
  )
}

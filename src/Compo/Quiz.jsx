import React, { useState } from 'react'
import QuizCard from './QuizCard'

export default function Quiz() {
    let [q1, setQ1] =useState("")
    let [q2, setQ2] =useState("")
    let [q3, setQ3] =useState("")
    let [score, setScore] =useState(0)
    let [right, setRight] =useState(0)
    let [wrong, setWrong] =useState(0)
    let [flag, setFlag] = useState(false)

    function quiz_sum(){
        if (q1 === "op2") {
            score+=5
            right+=1
            
        }
        else{
            wrong+=1
        }
        if (q2 === "op3") {
            score+=5
            right+=1
            
        }
        else{
            wrong+=1
        }
        if (q3 === "op1") {
            score+=5
            right+=1
            
        }
        else{
            wrong+=1
        }
        setScore(score)
        setRight(right)
        setWrong(wrong)
        setFlag(true)
    }
  return (
    <div className='container'>
        <h1>Quiz Application</h1>
        <hr />
        <div className='container'>
            <h4>Pakistan ka capital?</h4>
            <input type="radio" value="op1" onChange={(e)=>setQ1(e.target.value)} checked={q1==="op1"} />&nbsp;Karachi&nbsp;
            <input type="radio" value="op2" onChange={(e)=>setQ1(e.target.value)} checked={q1==="op2"}/>&nbsp;Islamabad&nbsp;
            <input type="radio" value="op3" onChange={(e)=>setQ1(e.target.value)} checked={q1==="op3"} />&nbsp;Lahore&nbsp;

            <h4>HTML full form?</h4>
            <input type="radio" value="op1" onChange={(e)=>setQ2(e.target.value)} checked={q2==="op1"} />&nbsp;Hyper Text Market Language&nbsp;
            <input type="radio" value="op2" onChange={(e)=>setQ2(e.target.value)} checked={q2==="op2"}/>&nbsp;Hyper Test Markup Language&nbsp;
            <input type="radio" value="op3" onChange={(e)=>setQ2(e.target.value)} checked={q2==="op3"}/>&nbsp;Hyper Text Markup Language&nbsp;

            <h4>2+2=?</h4>
            <input type="radio" value="op1" onChange={(e)=>setQ3(e.target.value)} checked={q3==="op1"} />&nbsp;4&nbsp;
            <input type="radio" value="op2" onChange={(e)=>setQ3(e.target.value)} checked={q3==="op2"} />&nbsp;3&nbsp;
            <input type="radio" value="op3" onChange={(e)=>setQ3(e.target.value)} checked={q3==="op3"} />&nbsp;5&nbsp;
            <br />
            <button className='btn btn-warning my-3' onClick={quiz_sum}>Submit</button>

            {
                flag === true && (
                    <QuizCard score={score} right={right} wrong={wrong}/>
                )
            }



        </div>
    </div>
  )
}

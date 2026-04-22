import React, { useState } from 'react'

export default function Counter() {
    let [count , setCount] = useState(0)

    function add (){
        setCount(count++)
    }
    function sub (){
        setCount(count--)
    }
  return (
    <div><br />
        <button className='btn btn-primary' onClick={add}>Increase</button>
        <p>Count is {count} </p>
        <button className='btn btn-danger' onClick={sub} disabled={count===0}>Decrease</button>
    </div>
  )
}

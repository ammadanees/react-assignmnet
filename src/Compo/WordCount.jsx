import React, { useState } from 'react'

export default function WordCount() {
    let [txt, setTxt] = useState("")
    let [letterC, setLetterC] = useState(0)
    let [wordC, setWordC] = useState(0)
    let [upper, setUpper] = useState(0)
    let [lower, setLower] = useState(0)
    let [numbr, setNumbr] = useState(0)

    function txt_change(e){
        let msg_box = e.target.value;
        setTxt(msg_box)

        let letter_count = msg_box.length
        let word_count = msg_box.trim().split(/\s/).filter(Boolean)
        let upper_count = msg_box.match(/[A-Z]/g) || []
        let lower_count = msg_box.match(/[a-z]/g) || []
        let number_count = msg_box.match(/[0-9]/g) || []

        setLetterC(letter_count)
        setWordC(word_count.length)
        setUpper(upper_count.length)
        setLower(lower_count.length)
        setNumbr(number_count.length)
    }
  return (
    <div className='container'>
        <h1>Word Counter</h1>
        <hr />
        <h4>Enter Your Message</h4>
        <textarea className='form-control my-3' value={txt} onChange={txt_change}></textarea>

        <div className='container'>
        <div className='row alert alert-secondary'>
        <p className='alert alert-primary'>Msg is : <b>{txt}</b></p>
            <br />
            Letter Count : <b>{letterC}</b>
            <br />
            Word Count : <b>{wordC}</b>
            <br />
            Upper Count : <b>{upper}</b>
            <br />
            Lower Count : <b>{lower}</b>
            <br />
            Number Count : <b>{numbr}</b>
        </div>

        </div>

    </div>
  )
}

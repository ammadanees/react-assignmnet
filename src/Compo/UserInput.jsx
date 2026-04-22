import React from 'react'

export default function UserInput() {
    function marks(){
        let name = prompt("Enter your name: ")
        let english = parseFloat(prompt("Enter English Marks : "))
        let math = parseFloat(prompt("Enter Maths Marks : "))
        let urdu = parseFloat(prompt("Enter Urdu Marks : "))

        if (english > 50 || math > 50 || urdu > 50  || english == 0 || math == 0 || urdu == 0) {
            alert("Number can't be 0 or greater than 50")
         return   
        }

        let total = english + math + urdu 
        let per = (total * 100)/150

        alert(`${name} total marks is ${total}\nPercentage is ${per.toFixed(2)} %`)
        console.log(`User name: ${name}\nEnglish Marks: ${english}\nMaths Marks: ${math}\nUrdu Marks: ${urdu}\nTotal Marks: ${total}\nPercentage: ${per.toFixed(2)}`)
    }
  return (
    <div>
        <button
            type="button"
            class="btn btn-primary"
            onClick={marks}
        >
            Click me
        </button>
        
        
    </div>
  )
}

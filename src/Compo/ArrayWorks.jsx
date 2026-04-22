import React from 'react'

export default function ArrayWorks() {
    let planet_names = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]
    let numbers = [4,5,7,14,17,20,25,30,45,48,51]
    let filters_numbers = numbers.filter((b)=>b  < 30)
  return (
    <div>
        <h1>Planets Name</h1>
        {
            planet_names.map((p)=>(
                <li>{p}</li>
            )

            )
        }

<h1>Numbers</h1>
        {
            filters_numbers.map((n)=>(
                <li>{n}</li>
            )

            )
        }
    </div>
  )
}

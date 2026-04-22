import React from 'react'

export default function Alerts() {
    function alertfunc(){
        let cityname = "Karachi";
        let is_metropolis = true;
        let pop = 10000000;
        let nooftown = 10;
        let famous = "Burns Road";
        alert(`City Name is ${cityname}\nIs it Metropolis: ${is_metropolis}\nTotal Population ${pop}\nNumber of Towns ${nooftown}\nFamous Place is ${famous}`)
        console.log(`City Name is ${cityname} \nIs it Metroplois: ${is_metropolis}`)
    }
  return (
    <div>
        <br />
        
        <button type="button" class="btn btn-primary btn-lg" onClick={()=>{ alert("Button has been clicked") }}>First Method</button>
        <br/><br />

        
        <button type="button" class="btn btn-success btn-lg" onClick={alertfunc}>Second Method</button>
    </div>
  )
}

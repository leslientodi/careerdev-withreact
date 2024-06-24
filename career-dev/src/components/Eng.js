import React from "react";


export default function Eng(){
    const [career, setCareer] = React.useState(
        {field:""}
    )
    const [degree, setDegree] = React.useState("")

    function handleInput(event) {
        const {name, value} = event.target
        setCareer(prev => {
          return {
            ...prev,
            [name]:  value
          }
        })
        
        
      }

      function selectField(){
        console.log(career.field)
        if(career.field === "Heat and Mechanics"){
            setDegree(<h2>Bsc Mechanical Engineering</h2>)
        } else if (career.field === "Electricity"){
            setDegree(<h2>Bsc Electrical Engineering</h2>)
        } else if (career.field === "Strength Of Materials"){
            setDegree(<h2>Bsc Civil Engineering</h2>)
        } else if (career.field === "Thermodynamics"){
            setDegree(<h2>Bsc Aerospace Engineering</h2>)
        }
      }
    return(
        <>
            <h2>Select your field of interest</h2>
                <select class="fields-HM" id="field" value={career.field} onChange={handleInput} name="field">
                    <option>-- Choose field --</option>
                   <option>Heat and Mechanics</option>
                   <option>Electricity</option>
                   <option>Strength Of Materials</option>
                   <option>Thermodynamics</option>
                
                
                
                
                </select>
                <button class="submit"
                
                onClick={selectField}>Submit</button>
                {degree}
        </>
    )
}
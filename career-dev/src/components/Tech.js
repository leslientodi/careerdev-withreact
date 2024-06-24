import React from "react";


export default function Tech (){
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
        if(career.field === "Satellites"){
            setDegree(<h2>Bsc Telecommunication Engineering</h2>)
        } else if (career.field === "Computers"){
            setDegree(<h2>Bsc Computer Engineering</h2>)
        }
      }




    return(
        <>
            <h2>Select your field of interest</h2>
        <select id="field" value={career.field} onChange={handleInput} name="field">
           <option>-- Choose field --</option>
           <option>Satellites</option>
           <option>Computers</option>
           
        
        
        
        
        </select>
        <button class="submit"
        
        onClick={selectField}>Submit</button>
        {degree}
        </>
    )
}
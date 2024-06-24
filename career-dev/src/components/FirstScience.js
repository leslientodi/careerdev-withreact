import React from "react";


export default function FirstScience(){
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
        if(career.field === "Human Anatomy"){
            setDegree(<h2>Bsc Human Biology(Medicine) </h2>)
        } else if (career.field === "Organic Chemistry"){
            setDegree(<h2>Bsc Pharmacy</h2>)
        } else if (career.field === "Lab Equipments"){
            setDegree(<h2>Bsc Biomedical Engineering</h2>)
        }
      }




    return(
        <>
                <h2>Select your field of interest</h2>
                <select id="field" value={career.field} onChange={handleInput} name="field">
                <option>-- Choose field --</option>
                <option>Human Anatomy</option>
                <option>Organic Chemistry</option>
                <option>Lab Equipments</option>


            
            
            
            
            
                </select>
                <button class="submit" onClick={selectField}>Submit</button>
                {degree}
        </>
    )
}
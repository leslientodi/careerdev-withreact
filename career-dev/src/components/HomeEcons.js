import React from "react";
import Nurse from "./Nurse";
import English from "./English";

export default function HomeEcons (){
    const [field, setField] = React.useState("")
    const [grades , setGrades] = React.useState(
        {physics:"", chemistry:"", emaths:"", biology:"", ict:"", agric:"", geography:"",cmaths:"", english:"",intScience:"",social:"",
        government:"", history:"", economics:"", fa:"", bm:"",costing:"",GKA:"", textiles:"", picture:"",cas:"", graphic:"", leather:"", catering:"", fan:"",
        mil:""}
      )
      
      function handleInput(event) {
        const {name, value} = event.target
        setGrades(prev => {
          return {
            ...prev,
            [name]:  value
          }
        })
        
        
      }

      function careerHomeEcons(){
        if (grades.catering == 1 && grades.mil < 3 && grades.mil > 0 ){
          setField(
            <>
              <h2>Fashion Design</h2>
              <h2>BA Industrial Arts</h2>
            </>
          )
        } else if (grades.fan == 1 && grades.chemistry < 4 && grades.chemistry> 0){
          setField(
            <>
              <h2>Bsc Dietetics</h2>
              <h2>Bsc food science</h2>
            </>
          )
        } else if(grades.biology == 1 && grades.intScience < 4 && grades.cmaths < 4 && grades.intScience > 0 && grades.cmaths > 0){
          setField(
            <Nurse />
          )
        } else if (grades.english == 1 & grades.social == 1){
          setField(
            <English />
          )
        } 
      }



    return(
        <>
            <div>
                            
                            <ul class="elective">
                                <li class="courses"><h3>Elective Subjects</h3></li>
                                <li class="courses"><label>Catering and sewing</label><input class='cas' type='number' min='1' max='9' onChange={handleInput} name='catering' value={grades.catering}></input> </li>
                                <br></br>
                                <li class="courses"><label>Food and Nutrition</label><input class='fan' type='number' min='1' max='9' onChange={handleInput} name='fan' value={grades.fan}></input> </li>
                                <br></br>
                        
                                <li class="courses"><label>Management in living</label><input class='mil' type='number' min='1' max='9' onChange={handleInput} name='mil' value={grades.mil}></input> </li>
                                <br></br>
                                <li class="courses"><label>Biology</label><input class='biology' type='number' min='1' max='9' onChange={handleInput} name='biology' value={grades.biology}></input> </li>
                                <br></br>
                                <li class="courses"><label>Chemistry</label><input class='chemistry' type='number' min='1' max='9' onChange={handleInput} name='chemistry' value={grades.chemistry}></input> </li>
                                <br></br>
                               
                            </ul>
                            
                        
                        
                        
                        
                            <ul>
                                    <li class="courses"><h3>Core Subjects</h3></li>
                                    <li class="courses"><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9' onChange={handleInput} name='cmaths' value={grades.cmaths}></input> </li>
                                    <br></br>
                                    <li class="courses"><label>English</label><input class='english' type='number' min='1' max='9' onChange={handleInput} name='english' value={grades.english}></input> </li>
                                    <br></br>
                                    <li class="courses"><label>Int-Science</label><input class='intScience' type='number' min='1' max='9' onChange={handleInput} name='intScience' value={grades.intScience}></input> </li>
                                    <br></br>
                                    <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9' onChange={handleInput} name='social' value={grades.social}></input> </li>
                            
                        
        
                            </ul>
                                    
                        </div>
          <button onClick={careerHomeEcons}>submit</button>
          <div>{field}</div>
        
    
        </>
    )
}
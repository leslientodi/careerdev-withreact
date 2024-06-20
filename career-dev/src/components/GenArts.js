import React from "react";
import Law from "./Law";
import Econs from "./Econs";

export default function GenArts (){
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

      function careerGenArts() {
        if (grades.government == 1 && grades.english < 3 && grades.social == 1 && grades.history < 3 && grades.history > 0 && grades.english > 0){
          setField(
            <Law />
          )
          
        } else if (grades.cmaths < 3 && grades.economics < 3 && grades.cmaths > 0 && grades.economics > 0){
          setField(
            <Econs />
          )
        } else {
          setField(
            <h2>No Career matches your info</h2>
          )
        }
      }






    return(
        <>
            <div>
                            
                            <ul class="elective">
                                <li class="courses"><h3>Elective Subjects</h3></li>
                                <li class="courses"><label>Government</label><input class='government' type='number' min='1' max='9' onChange={handleInput} name='government' value={grades.government}></input> </li>
                                <br></br>
                                <li class="courses"><label>History</label><input class='history' type='number' min='1' max='9' onChange={handleInput} name='history' value={grades.history}></input> </li>
                                <br></br>
                        
                                <li class="courses"><label>E-Maths</label><input class='emaths' type='number' min='1' max='9' onChange={handleInput} name='emaths' value={grades.emaths}></input> </li>
                                <br></br>
                                <li class="courses"><label>Economics</label><input class='economics' type='number' min='1' max='9' onChange={handleInput} name='economics' value={grades.economics}></input> </li>
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
          <button onClick={careerGenArts}>submit</button>
          <div>{field}</div>

        
    
      </>


      )
    
        
        
    
}
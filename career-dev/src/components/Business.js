import React from "react";
import English from "./English";

export default function Business() {
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

      function careerBusiness(){
        if(grades.bm == 1 && grades.emaths < 4 && grades.cmaths < 3 && grades.fa<3 && grades.costing<3 && grades.emaths > 0 && grades.cmaths>0 && grades.fa>0 && grades.costing > 0){
          setField(
            <h2>Business Administration(Banking/Accounting/Finance)</h2>
          )
        } else if (grades.economics ==1 ){
          setField(
            <h2>BSc. Economics</h2>
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
                                <li class="courses"><label>Financial Accounting</label><input class='fa' type='number' min='1' max='9' onChange={handleInput} name='fa' value={grades.fa}></input> </li>
                                <br></br>
                                <li class="courses"><label>Business Management</label><input class='bm' type='number' min='1' max='9' onChange={handleInput} name='bm' value={grades.bm}></input> </li>
                                <br></br>
                        
                                <li class="courses"><label>E-Maths</label><input class='emaths' type='number' min='1' max='9' onChange={handleInput} name='emaths' value={grades.emaths}></input> </li>
                                <br></br>
                                <li class="courses"><label>Economics</label><input class='economics' type='number' min='1' max='9' onChange={handleInput} name='economics' value={grades.economics}></input> </li>
                                <br></br>
                                <li class="courses"><label>Cost Accounting</label><input class='costing' type='number' min='1' max='9' onChange={handleInput} name='costing' value={grades.costing}></input> </li>
                    
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
          <button onClick={careerBusiness}>submit</button>
          <div>{field}</div>
        
        
        </>
    )
}
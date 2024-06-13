import React from "react";


export default function GenScience() {

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

      




    return (
        <>
            
          
          <div>
                              
                              <ul class="elective">
                                  <li class="courses"><h3>Elective Subjects</h3></li>
                                  <li class="courses"><label>Physics</label><input className='physics' type='number'  onChange={handleInput} name='physics' value={grades.physics}></input> </li>
                                  <br></br>
                                  <li className="courses"><label>Chemistry</label><input className='chemistry' type='number' min='1' max='9' onChange={handleInput} name='chemistry' value={grades.chemistry}></input> </li>
                                  <br></br>
                          
                                  <li className="courses"><label>E-Maths</label><input className='emaths' type='number' min='1' max='9' onChange={handleInput} name='emaths' value={grades.emaths}></input> </li>
                                  <br></br>
                                  <li className="courses"><label>Biology</label><input className='biology' type='number' min='1' max='9' onChange={handleInput} name='biology' value={grades.biology}></input> </li>
                                  <br></br>
                                  <li className="courses"><label>ICT</label><input className='ict' type='number' min='1' max='9' onChange={handleInput} name='ict' value={grades.ict}></input> </li>
                                  <br></br>
                                  <li className="courses"><label>Agriculture</label><input className='agric' type='number' min='1' max='9' onChange={handleInput} name='agric' value={grades.agric}></input> </li>
                                  <br></br>
                                  <li className="courses"><label>Geography</label><input className='geography' type='number' min='1' max='9' onChange={handleInput} name='userName' value={grades.geography}></input> </li>
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
            <button>submit</button>
          
        </>
    )
}
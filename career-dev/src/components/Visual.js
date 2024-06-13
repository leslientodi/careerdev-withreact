import React from "react";

export default function Visual(){
    const [grades , setGrades] = React.useState(
        {physics:"", chemistry:"", emaths:"", biology:"", ict:"", agric:"", geography:"",cmaths:"", english:"",intScience:"",social:"",
        government:"", history:"", economics:"", fa:"", bm:"",costing:"",GKA:"", textiles:"", picture:"",cas:"", graphic:"", leather:"", catering:"", fan:"",
        mil:"",basketry:""}
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




    return(
    <>
            <div>
                                
                                <ul class="elective">
                                    <li class="courses"><h3>Elective Subjects</h3></li>
                                    <li class="courses"><label>General Knowledge in Art</label><input class='gka' type='number' min='1' max='9' onChange={handleInput} name='GKA' value={grades.GKA}></input> </li>
                                    <br></br>
                                    <li class="courses"><label>Textiles</label><input class='textiles' type='number' min='1' max='9' onChange={handleInput} name='textiles' value={grades.textiles}></input> </li>
                                    <br></br>
                            
                                    <li class="courses"><label>Picture making</label><input class='picture' type='number' min='1' max='9' onChange={handleInput} name='picture' value={grades.picture}></input> </li>
                                    <br></br>
                                    <li class="courses"><label>Ceramics & Sculpture</label><input class='ceramics' type='number' min='1' max='9' onChange={handleInput} name='cas' value={grades.cas}></input> </li>
                                    <br></br>
                                    <li class="courses"><label>Basketry</label><input class='basketry' type='number' min='1' max='9' onChange={handleInput} name='basketry' value={grades.basketry}></input> </li>
                                    <br></br>
                                    <li class="courses"><label>Graphic Design</label><input class='graphic' type='number' min='1' max='9' onChange={handleInput} name='graphic' value={grades.graphic}></input> </li>
                                    <br></br>
                                    <li class="courses"><label>Leather work</label><input class='leather' type='number' min='1' max='9' onChange={handleInput} name='leather' value={grades.leather}></input> </li>
                                </ul>
                                
                            
                            
                            
                            
                                <ul>
                                        <li class="courses"><h3>Core Subjects</h3></li>
                                        <li class="courses"><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9' onChange={handleInput} name='cmaths' value={grades.cmaths}></input> </li>
                                        <br></br>
                                        <li class="courses"><label>English</label><input class='english' type='number' min='1' max='9' onChange={handleInput} name='english' value={grades.englsh}></input> </li>
                                        <br></br>
                                        <li class="courses"><label>Int-Science</label><input class='intScience' type='number' min='1' max='9' onChange={handleInput} name='intScience' value={grades.intScience}></input> </li>
                                        <br></br>
                                        <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9' onChange={handleInput} name='social' value={grades.social}></input> </li>
                                
                            
            
                                </ul>
                                        
                            </div>
            <button /*onclick="careerVisualArts();"*/>submit</button>
    </>)
}
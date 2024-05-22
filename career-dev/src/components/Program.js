import React from "react";


export default function Program(){
    const text= document.querySelector('.program')
    const program = text.value
    program = program.toUpperCase()

    function selectProgram(){
        if (program === 'GENERAL SCIENCE') {
            document.querySelector('.program-info').innerHTML=
                
                  `<p>You are offering ${program}</p> <h2>Now Enter Your Grades</h2> 
                    
                    <div>
                        
                        <ul class="elective">
                            <li class="courses"><h3>Elective Subjects</h3></li>
                            <li class="courses"><label>Physics</label><input></input> class='physics' type='number' min='1' max='9'</li>
                            <br></br>
                            <li class="courses"><label>Chemistry</label><input></input> class='chemistry' type='number' min='1' max='9'</li>
                            <br></br>
                            <li class="courses"><label>E-Maths</label><input></input> class='emaths' type='number' min='1' max='9'</li>
                            <br></br>
                            <li class="courses"><label>Biology</label><input></input> class='biology' type='number' min='1' max='9'</li>
                            <br></br>
                            <li class="courses"><label>ICT</label><input></input> class='ict' type='number' min='1' max='9'</li>
                            <br></br>
                            <li class="courses"><label>Agriculture</label><input></input> class='agric' type='number' min='1' max='9'</li>
                            <br></br>
                            <li class="courses"><label>Geography</label><input></input> class='geography' type='number' min='1' max='9'</li>
                        </ul>
                        
                    
                    
                    
                    
                        <ul>
                                <li class="courses"><h3>Core Subjects</h3></li>
                                <li class="courses"><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>English</label><input class='english' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Int-Science</label><input class='intScience' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9'></input> </li>
                        
                    
    
                        </ul>
                                
                    </div>
                    <button onclick="careerScience();">submit</button>`
    
        }



    }


    
    
    return(
        <>{document.querySelector('.program-info').innerHTML}</>
    )
    
                      
}            
                        
            
                        
            

            

        
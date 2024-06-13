import React from "react";

export default function GenScience() {
    return (
        <>
            <p>You are offering {/*upperProgram*/} </p> <h2>Now Enter Your Grades</h2> 
          
          <div>
                              
                              <ul class="elective">
                                  <li class="courses"><h3>Elective Subjects</h3></li>
                                  <li class="courses"><label>Physics</label><input className='physics' type='number'  /*onChange={handleInput} name='physics' value={introData.physics}*/></input> </li>
                                  <br></br>
                                  <li className="courses"><label>Chemistry</label><input className='chemistry' type='number' min='1' max='9' /*onChange={handleInput} name='chemistry' value={introData.chemistry}*/></input> </li>
                                  <br></br>
                          
                                  <li className="courses"><label>E-Maths</label><input className='emaths' type='number' min='1' max='9' /*onChange={handleInput} name='emaths' value={introData.emaths}*/></input> </li>
                                  <br></br>
                                  <li className="courses"><label>Biology</label><input className='biology' type='number' min='1' max='9' /*onChange={handleInput} name='biology' value={introData.biology}*/></input> </li>
                                  <br></br>
                                  <li className="courses"><label>ICT</label><input className='ict' type='number' min='1' max='9' /*onChange={handleInput} name='ict' value={introData.ict}*/></input> </li>
                                  <br></br>
                                  <li className="courses"><label>Agriculture</label><input className='agric' type='number' min='1' max='9' /*onChange={handleInput} name='agric' value={introData.agric}*/></input> </li>
                                  <br></br>
                                  <li className="courses"><label>Geography</label><input className='geography' type='number' min='1' max='9' /*onChange={handleInput} name='userName' value={introData.geography}*/></input> </li>
                              </ul>
                              
                          
                          
                          
                          
                              <ul>
                                      <li class="courses"><h3>Core Subjects</h3></li>
                                      <li class="courses"><label>C-Maths</label><input class='cmaths' type='number' min='1' max='9' /*onChange={handleInput} name='cmaths' value={introData.cmaths}*/></input> </li>
                                      <br></br>
                                      <li class="courses"><label>English</label><input class='english' type='number' min='1' max='9' /*onChange={handleInput} name='english' value={introData.english}*/></input> </li>
                                      <br></br>
                                      <li class="courses"><label>Int-Science</label><input class='intScience' type='number' min='1' max='9' /*onChange={handleInput} name='intScience' value={introData.intScience}*/></input> </li>
                                      <br></br>
                                      <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9' /*onChange={handleInput} name='social' value={introData.social}*/></input> </li>
                              
                          
          
                              </ul>
                                      
                          </div>
            <button>submit</button>
          
        </>
    )
}
import logo from './logo.svg';
import './App.css';
import React from "react";


function App() {
  const [appear, setAppear] = React.useState("")
  const [introData , setProgram] = React.useState(
    {userName:"", program: ""}
  )
  const [grades, setGrades] = React.useState(
    {physics:"", chemistry:"", emaths:"", biology:"", ict:"", agric:"", geography:"",cmaths:"", english:"",intScience:"",social:"",
      government:"", history:"", economics:"", fa:"", bm:"",costing:"",GKA:"", textiles:"", picture:"",cas:"", graphic:"", leather:"", catering:"", fan:"",
      mil:""
    }
  )

  

  

  function handleInput(event) {
    setProgram(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
    setGrades(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
  
  
  const upper = introData.program;
  const upperProgram = upper.toUpperCase();

  
    

  function selectProgram() {
    if (upperProgram==="GENERAL SCIENCE"){

      setAppear(<>
        <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2> 
          
        <div>
                            
                            <ul class="elective">
                                <li class="courses"><h3>Elective Subjects</h3></li>
                                <li class="courses"><label>Physics</label><input className='physics' type='number' min='1' max='9' onChange={handleInput} name='physics' value={grades.physics}></input> </li>
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
                                    <li class="courses"><label>Social Studies</label><input class='social' type='number' min='1' max='9' onChange={handleInput} name='social' value={introData.social}></input> </li>
                            
                        
        
                            </ul>
                                    
                        </div>
          <button onclick="careerScience();">submit</button>
        
    
      </>)

    } else if (upperProgram==="GENERAL ARTS"){
      setAppear(<>
        <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2> 
          
        <div>
                            
                            <ul class="elective">
                                <li class="courses"><h3>Elective Subjects</h3></li>
                                <li class="courses"><label>Government</label><input class='government' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>History</label><input class='history' type='number' min='1' max='9'></input> </li>
                                <br></br>
                        
                                <li class="courses"><label>E-Maths</label><input class='emaths' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Economics</label><input class='economics' type='number' min='1' max='9'></input> </li>
                                <br></br>

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
          <button onclick="careerGeneralArts();">submit</button>
        
    
      </>


      )
    } else if (upperProgram === "BUSINESS"){
      setAppear(<>
        <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2> 
          
        <div>
                            
                            <ul class="elective">
                                <li class="courses"><h3>Elective Subjects</h3></li>
                                <li class="courses"><label>Financial Accounting</label><input class='fa' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Business Management</label><input class='bm' type='number' min='1' max='9'></input> </li>
                                <br></br>
                        
                                <li class="courses"><label>E-Maths</label><input class='emaths' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Economics</label><input class='economics' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Cost Accounting</label><input class='costing' type='number' min='1' max='9'></input> </li>
                    
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
          <button onclick="careerBusiness();">submit</button>
        
    
      </>

      )
    } else if (upperProgram === "HOME ECONOMICS") {
      setAppear(<>
        <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2> 
          
        <div>
                            
                            <ul class="elective">
                                <li class="courses"><h3>Elective Subjects</h3></li>
                                <li class="courses"><label>Catering and sewing</label><input class='cas' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Food and Nutrition</label><input class='fan' type='number' min='1' max='9'></input> </li>
                                <br></br>
                        
                                <li class="courses"><label>Management in living</label><input class='mil' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Biology</label><input class='biology' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Chemistry</label><input class='chemistry' type='number' min='1' max='9'></input> </li>
                                <br></br>
                               
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
          <button onclick="careerHomeEcons();">submit</button>
        
    
      </>

      )
    } else if (upperProgram === "VISUAL ARTS") {
      setAppear(<>
        <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2> 
          
        <div>
                            
                            <ul class="elective">
                                <li class="courses"><h3>Elective Subjects</h3></li>
                                <li class="courses"><label>General Knowledge in Art</label><input class='gka' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Textiles</label><input class='textiles' type='number' min='1' max='9'></input> </li>
                                <br></br>
                        
                                <li class="courses"><label>Picture making</label><input class='picture' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Ceramics & Sculpture</label><input class='ceramics' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Basketry</label><input class='basketry' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Graphic Design</label><input class='graphic' type='number' min='1' max='9'></input> </li>
                                <br></br>
                                <li class="courses"><label>Leather work</label><input class='leather' type='number' min='1' max='9'></input> </li>
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
          <button onclick="careerVisualArts();">submit</button>
        
    
      </>


      )
    } else{
      setAppear(<p>Invalid program entered</p>)
    }
    
    


  }

  
    

    

      
    
  



  return (
    <div className="App">
      



    <h1>Find Your Best Career Path</h1>
    <h2>Enter your program</h2>
    
    

    
    
    <input className='username' type='text' placeholder='Username' onChange={handleInput} name='userName' value={introData.userName}></input>
    <br></br>

    <input className="program" type="text" placeholder="eg. General Science" onChange={handleInput} name='program' value={introData.program}></input>
    

    <button onClick={selectProgram}>Submit</button>

    <section className="program-info"></section>
    {appear}

    
    



    
    </div>
  );
}

export default App;

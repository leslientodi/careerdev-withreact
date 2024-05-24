import logo from './logo.svg';
import './App.css';
import React from "react";


function App() {
  const [appear, setAppear] = React.useState("")
  const [program , setProgram] = React.useState("")

  function handleInput(event) {
    console.log(event.target.value)
  }
  
  
  
    

  function selectProgram() {
    setAppear(<>
    <p>You are offering </p> <h2>Now Enter Your Grades</h2> 
      
    <div>
                        
                        <ul class="elective">
                            <li class="courses"><h3>Elective Subjects</h3></li>
                            <li class="courses"><label>Physics</label><input class='physics' type='number' min='1' max='9'></input> </li>
                            <br></br>
                            <li class="courses"><label>Chemistry</label><input class='chemistry' type='number' min='1' max='9'></input> </li>
                            <br></br>
                    
                            <li class="courses"><label>E-Maths</label><input class='biology' type='number' min='1' max='9'></input> </li>
                            <br></br>
                            <li class="courses"><label>Biology</label><input class='biology' type='number' min='1' max='9'></input> </li>
                            <br></br>
                            <li class="courses"><label>ICT</label><input class='ict' type='number' min='1' max='9'></input> </li>
                            <br></br>
                            <li class="courses"><label>Agriculture</label><input class='agric' type='number' min='1' max='9'></input> </li>
                            <br></br>
                            <li class="courses"><label>Geography</label><input class='geography' type='number' min='1' max='9'></input> </li>
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
      <button onclick="careerScience();">submit</button>
    

  </>)
    


  }
    

    

      
    
  



  return (
    <div className="App">
      



    <h1>Find Your Best Career Path</h1>
    <h2>Enter your program</h2>
    
    

    
    
    

    <input className="program" type="text" placeholder="eg. General Science" onChange={handleInput}></input>
    

    <button onClick={selectProgram}>Submit</button>

    <section className="program-info"></section>
    {appear}
    
    



    
    </div>
  );
}

export default App;

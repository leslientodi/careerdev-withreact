import logo from './logo.svg';
import './App.css';
import React from "react";
import GenScience from './components/GenScience';
import GenArts from './components/GenArts';


function App() {
  const [appear, setAppear] = React.useState("")

  const [introData , setProgram] = React.useState(
    {userName:"", program: ""}
  )
  
  function handleInput(event) {
    const {name, value} = event.target
    setProgram(prev => {
      return {
        ...prev,
        [name]:  value
      }
    })
    
    
  }

  

  
  
  
  const upper = introData.program;
  const upperProgram = upper.toUpperCase();

  
  function selectProgram(){
    
    if (upperProgram === "GENERAL SCIENCE"){
     setAppear(<><p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2> 
     <GenScience />
     
     </>
    )
     
     
    } else if (upperProgram === "GENERAL ARTS"){
      setAppear(<><p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2> 
      <GenArts />
      </>)
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

    <>
        
    
      </>

    
    



    
    </div>
  );
}

export default App;

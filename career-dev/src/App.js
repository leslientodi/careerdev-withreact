import logo from './logo.svg';
import './App.css';
import React from "react";
import GenScience from './components/GenScience';


function App() {
  
    

    

      
    
  



  return (
    <div className="App">
      



    <h1>Find Your Best Career Path</h1>
    <h2>Enter your program</h2>
    
    

    
    
    <input className='username' type='text' placeholder='Username' /*onChange={handleInput} name='userName' value={introData.userName}*/></input>
    <br></br>

    <input className="program" type="text" placeholder="eg. General Science" /*onChange={handleInput} name='program' value={introData.program}*/></input>
    

    <button /*onClick={selectProgram}*/>Submit</button>

    <section className="program-info"></section>
    <GenScience />

    <>
        
    
      </>

    
    



    
    </div>
  );
}

export default App;

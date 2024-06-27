import logo from "./logo.svg";
import "./App.css";
import React from "react";
import GenScience from "./components/GenScience";
import GenArts from "./components/GenArts";
import Business from "./components/Business";
import HomeEcons from "./components/HomeEcons";
import Visual from "./components/Visual";
import BusAdmin from "./components/BusAdmin";

function App() {
  const [appear, setAppear] = React.useState("");

  const [introData, setProgram] = React.useState({ userName: "", program: "" });

  function handleInput(event) {
    const { name, value } = event.target;
    setProgram((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function clearApp() {
    setAppear(false);
  }

  const upper = introData.program;
  const upperProgram = upper.toUpperCase();

  function selectProgram() {
    if (upperProgram === "GENERAL SCIENCE") {
      setAppear(
        <>
          <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2>
          <GenScience />
        </>
      );
    } else if (upperProgram === "GENERAL ARTS") {
      setAppear(
        <>
          <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2>
          <GenArts />
        </>
      );
    } else if (upperProgram === "BUSINESS") {
      setAppear(
        <>
          <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2>
          <Business />
        </>
      );
    } else if (upperProgram === "HOME ECONOMICS") {
      setAppear(
        <>
          <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2>
          <HomeEcons />
        </>
      );
    } else if (upperProgram === "VISUAL ARTS") {
      setAppear(
        <>
          <p>You are offering {upperProgram} </p> <h2>Now Enter Your Grades</h2>
          <Visual />
        </>
      );
    }
  }

  return (
    <div className="App">
      <header className="h-80 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h2 className="mb-0 text-black fw-bold">
                Find Your Best Career Path
              </h2>
              <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                Enter your program
              </h1>
              <input
                className="username"
                type="text"
                placeholder="Username"
                onChange={handleInput}
                name="userName"
                value={introData.userName}
              ></input>
              <br></br>

              <input
                className="program"
                type="text"
                placeholder="eg. General Science"
                onChange={handleInput}
                name="program"
                value={introData.program}
              ></input>

              <button
                onClick={selectProgram}
                className="btn btn-success btn-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <section className="program-info"></section>
            {appear}
          </div>
        </div>
      </div>

      <></>
    </div>
  );
}

export default App;

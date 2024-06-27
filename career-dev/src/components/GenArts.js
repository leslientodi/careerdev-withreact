import React from "react";
import Law from "./Law";
import Econs from "./Econs";

export default function GenArts() {
  const [field, setField] = React.useState("");

  const [grades, setGrades] = React.useState({
    physics: "",
    chemistry: "",
    emaths: "",
    biology: "",
    ict: "",
    agric: "",
    geography: "",
    cmaths: "",
    english: "",
    intScience: "",
    social: "",
    government: "",
    history: "",
    economics: "",
    fa: "",
    bm: "",
    costing: "",
    GKA: "",
    textiles: "",
    picture: "",
    cas: "",
    graphic: "",
    leather: "",
    catering: "",
    fan: "",
    mil: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setGrades((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function careerGenArts() {
    if (
      grades.government == 1 &&
      grades.english < 3 &&
      grades.social == 1 &&
      grades.history < 3 &&
      grades.history > 0 &&
      grades.english > 0
    ) {
      setField(<Law />);
    } else if (
      grades.cmaths < 3 &&
      grades.economics < 3 &&
      grades.cmaths > 0 &&
      grades.economics > 0
    ) {
      setField(<Econs />);
    } else {
      setField(
        <div class="alert alert-danger" role="alert">
          No Career matches your info
        </div>
      );
    }
  }

  return (
    <>
      <div className="grades">
        <ul class="elective">
          <li class="courses">
            <span class="badge text-bg-primary">Elective Subjects</span>
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Government
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="government"
              value={grades.government}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              History
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="history"
              value={grades.history}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>

          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              E-maths
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="emaths"
              value={grades.emaths}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Economics
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="economics"
              value={grades.economics}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
        </ul>

        <ul>
          <li class="courses">
            <span class="badge text-bg-primary">Core Subjects</span>
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              C-Maths
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="cmaths"
              value={grades.cmaths}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              English
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="english"
              value={grades.english}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Int. Science
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="intScience"
              value={grades.intScience}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Social studies
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="social"
              value={grades.social}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
        </ul>
      </div>
      <button onClick={careerGenArts} className="btn btn-outline-primary">
        submit
      </button>
      <div>{field}</div>
    </>
  );
}

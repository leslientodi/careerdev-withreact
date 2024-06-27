import React from "react";
import Nurse from "./Nurse";
import English from "./English";

export default function HomeEcons() {
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

  function careerHomeEcons() {
    if (grades.catering == 1 && grades.mil < 3 && grades.mil > 0) {
      setField(
        <>
          <h2>Fashion Design</h2>
          <h2>BA Industrial Arts</h2>
        </>
      );
    } else if (
      grades.fan == 1 &&
      grades.chemistry < 4 &&
      grades.chemistry > 0
    ) {
      setField(
        <>
          <h2>Bsc Dietetics</h2>
          <h2>Bsc food science</h2>
        </>
      );
    } else if (
      grades.biology == 1 &&
      grades.intScience < 4 &&
      grades.cmaths < 4 &&
      grades.intScience > 0 &&
      grades.cmaths > 0
    ) {
      setField(<Nurse />);
    } else if ((grades.english == 1) & (grades.social == 1)) {
      setField(<English />);
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
              Catering & Sewing
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="catering"
              value={grades.catering}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Food & Nutrition
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="fan"
              value={grades.fan}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>

          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Management In Living
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="mil"
              value={grades.mil}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Biology
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="biology"
              value={grades.biology}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Biology
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="chemistry"
              value={grades.chemistry}
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
      <button onClick={careerHomeEcons} className="btn btn-outline-primary">
        submit
      </button>
      <div>{field}</div>
    </>
  );
}

import React from "react";
import English from "./English";

export default function Business() {
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

  function careerBusiness() {
    if (
      grades.bm == 1 &&
      grades.emaths < 4 &&
      grades.cmaths < 3 &&
      grades.fa < 3 &&
      grades.costing < 3 &&
      grades.emaths > 0 &&
      grades.cmaths > 0 &&
      grades.fa > 0 &&
      grades.costing > 0
    ) {
      setField(<h2>Business Administration(Banking/Accounting/Finance)</h2>);
    } else if (grades.economics == 1) {
      setField(<h2>BSc. Economics</h2>);
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
              Financial Accounting
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="fa"
              value={grades.fa}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Business Management
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="bm"
              value={grades.bm}
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
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Cost Accounting
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="costing"
              value={grades.costing}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
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
      <button onClick={careerBusiness} className="btn btn-outline-primary">
        submit
      </button>
      <div>{field}</div>
    </>
  );
}

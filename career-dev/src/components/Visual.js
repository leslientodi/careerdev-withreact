import React from "react";

export default function Visual() {
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
    basketry: "",
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

  function careerVisualArts() {
    if (grades.GKA < 3 && grades.GKA > 0) {
      setField(
        <div className="degree py-5 text-ligth shadow">
          <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
            <h2>BA Fine Arts</h2>
          </div>
        </div>
      );
    } else if (
      (grades.textiles < 3 && grades.textiles > 0) ||
      (grades.picture < 3 && grades.picture > 0) ||
      (grades.cas < 3 && grades.cas > 0) ||
      (grades.leather > 3 && grades.leather > 0) ||
      (grades.basketry < 3 && grades.basketry > 0)
    ) {
      setField(<h2>BA Industrial Arts</h2>);
    } else if (grades.graphic < 3 && grades.graphic > 0) {
      setField(
        <div className="degree py-5 text-ligth shadow">
          <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
            <h2>BA Communication Design</h2>
          </div>
        </div>
      );
    } else
      setField(
        <div class="alert alert-danger" role="alert">
          No Career matches your info
        </div>
      );
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
              General Knowledge in Arts
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="GKA"
              value={grades.GKA}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Textiles
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="textiles"
              value={grades.textiles}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>

          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Picture Making
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="picture"
              value={grades.picture}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Ceramics
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="cas"
              value={grades.cas}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Basketry
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="basketry"
              value={grades.basketry}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Graphic Design
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="graphic"
              value={grades.graphic}
              aria-label="sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>{" "}
          </li>
          <br></br>
          <li className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Leather Work
            </span>
            <input
              className="form-control"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="leather"
              value={grades.leather}
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
      <button onClick={careerVisualArts} className="btn btn-outline-primary">
        submit
      </button>
      <div>{field}</div>
    </>
  );
}

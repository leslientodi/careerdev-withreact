import React from "react";
import FirstScience from "./FirstScience";
import Eng from "./Eng";
import AllOnes from "./AllOnes";
import Tech from "./Tech";
import Chem from "./Chem";
import Techmin from "./Techmin";
import Medics from "./Medics";
import Math from "./Math";
import Land from "./Land";
import English from "./English";
import Agric from "./Agric";

export default function GenScience() {
  const [field, setField] = React.useState("");
  const [grades, setGrades] = React.useState({
    physics: 0,
    chemistry: 0,
    emaths: 0,
    biology: 0,
    ict: 0,
    agric: 0,
    geography: 0,
    cmaths: 0,
    english: 0,
    intScience: 0,
    social: 0,
    government: 0,
    history: 0,
    economics: 0,
    fa: 0,
    bm: 0,
    costing: 0,
    GKA: 0,
    textiles: 0,
    picture: 0,
    cas: 0,
    graphic: 0,
    leather: 0,
    catering: 0,
    fan: 0,
    mil: 0,
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

  function careerScience() {
    if (
      grades.chemistry < 3 &&
      grades.intScience < 3 &&
      grades.cmaths == 1 &&
      grades.english < 3 &&
      grades.emaths < 3 &&
      grades.english > 0 &&
      grades.emaths > 0 &&
      grades.chemistry > 0 &&
      grades.intScience > 0
    ) {
      if (grades.physics == 1 && grades.biology == 1) {
        setField(<AllOnes />);
      } else if (grades.physics == 1) {
        setField(<Eng />);
      } else if (grades.biology == 1) {
        setField(<FirstScience />);
      }
    } else if (
      (grades.physics == 1 && grades.emaths == 1) ||
      (grades.ict == 1 &&
        grades.physics < 3 &&
        grades.emaths < 3 &&
        grades.physics > 0 &&
        grades.emaths > 0)
    ) {
      setField(<Tech />);
    } else if (
      grades.chemistry == 1 &&
      grades.cmaths < 3 &&
      grades.intScience < 3 &&
      grades.physics < 3 &&
      grades.cmaths > 0 &&
      grades.intScience > 0 &&
      grades.physics > 0
    ) {
      setField(<Chem />);
    } else if (
      (grades.emaths < 3 &&
        grades.english < 4 &&
        grades.emaths > 0 &&
        grades.english > 0) ||
      (grades.ict == 1 &&
        grades.emaths < 4 &&
        grades.english < 4 &&
        grades.emaths > 0 &&
        grades.english > 0)
    ) {
      setField(<Techmin />);
    } else if (
      grades.intScience == 1 &&
      grades.biology < 3 &&
      grades.chemistry < 3 &&
      grades.cmaths < 3 &&
      grades.biology > 0 &&
      grades.chemistry > 0 &&
      grades.cmaths > 0
    ) {
      setField(<Medics />);
    } else if (grades.cmaths == 1 && grades.emaths == 1) {
      setField(<Math />);
    } else if (
      (grades.cmaths < 3 &&
        grades.cmaths > 0 &&
        grades.intScience < 4 &&
        grades.intScience > 0 &&
        grades.chemistry < 4 &&
        grades.chemistry > 0) ||
      (grades.geography == 1 && grades.cmaths < 3 && grades.cmaths > 0)
    ) {
      setField(<Land />);
    } else if ((grades.english == 1) & (grades.social == 1)) {
      setField(<English />);
    } else if (grades.agric == 1) {
      setField(<Agric />);
    } else {
      console.log("error");
    }
  }

  return (
    <>
      <div>
        <ul class="elective">
          <li class="courses">
            <h3>Elective Subjects</h3>
          </li>
          <li class="courses">
            <label>Physics</label>
            <input
              className="physics"
              type="number"
              onChange={handleInput}
              name="physics"
              value={grades.physics}
            ></input>{" "}
          </li>
          <br></br>
          <li className="courses">
            <label>Chemistry</label>
            <input
              className="chemistry"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="chemistry"
              value={grades.chemistry}
            ></input>{" "}
          </li>
          <br></br>

          <li className="courses">
            <label>E-Maths</label>
            <input
              className="emaths"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="emaths"
              value={grades.emaths}
            ></input>{" "}
          </li>
          <br></br>
          <li className="courses">
            <label>Biology</label>
            <input
              className="biology"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="biology"
              value={grades.biology}
            ></input>{" "}
          </li>
          <br></br>
          <li className="courses">
            <label>ICT</label>
            <input
              className="ict"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="ict"
              value={grades.ict}
            ></input>{" "}
          </li>
          <br></br>
          <li className="courses">
            <label>Agriculture</label>
            <input
              className="agric"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="agric"
              value={grades.agric}
            ></input>{" "}
          </li>
          <br></br>
          <li className="courses">
            <label>Geography</label>
            <input
              className="geography"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="geography"
              value={grades.geography}
            ></input>{" "}
          </li>
        </ul>

        <ul>
          <li class="courses">
            <h3>Core Subjects</h3>
          </li>
          <li class="courses">
            <label>C-Maths</label>
            <input
              class="cmaths"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="cmaths"
              value={grades.cmaths}
            ></input>{" "}
          </li>
          <br></br>
          <li class="courses">
            <label>English</label>
            <input
              class="english"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="english"
              value={grades.english}
            ></input>{" "}
          </li>
          <br></br>
          <li class="courses">
            <label>Int-Science</label>
            <input
              class="intScience"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="intScience"
              value={grades.intScience}
            ></input>{" "}
          </li>
          <br></br>
          <li class="courses">
            <label>Social Studies</label>
            <input
              class="social"
              type="number"
              min="1"
              max="9"
              onChange={handleInput}
              name="social"
              value={grades.social}
            ></input>{" "}
          </li>
        </ul>
      </div>
      <button onClick={careerScience}>submit</button>
      <div>{field}</div>
    </>
  );
}

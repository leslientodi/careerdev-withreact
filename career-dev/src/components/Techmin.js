import React from "react";

export default function Techmin() {
  const [career, setCareer] = React.useState({ field: "" });
  const [degree, setDegree] = React.useState("");

  function handleInput(event) {
    const { name, value } = event.target;
    setCareer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function selectField() {
    console.log(career.field);
    if (career.field === "Hacking") {
      setDegree(<h2>Bsc Cybersecurity </h2>);
    } else if (career.field === "Computers") {
      setDegree(<h2>Bsc Computer Science</h2>);
    } else if (career.field === "Data and Statistics") {
      setDegree(<h2>Bsc Data Science</h2>);
    }
  }

  return (
    <div className="App">
      <div className="menu-section py-5 text-ligth shadow ">
        <div className="container ">
          <h2 className=" text-uppercase fw-bold">
            Select your field of interest
          </h2>
          <div className="row mb-5 w-100">
            <div className="align-items-center">
              <select
                className="form-select"
                aria-label="Default select example"
                id="field"
                value={career.field}
                onChange={handleInput}
                name="field"
              >
                <option>-- Choose field --</option>
                <option>Hacking</option>
                <option>Computers</option>
                <option>Data and Statistics</option>
              </select>
              <button className="btn btn-outline-primary" onClick={selectField}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>{degree}</div>
      {degree}
    </div>
  );
}

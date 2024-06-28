import React from "react";

export default function English() {
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
    if (career.field === "The Constitution") {
      setDegree(<h2>Llb Law</h2>);
    } else if (career.field === "Politics") {
      setDegree(<h2>Bsc Political Science</h2>);
    } else if (career.field === "Societal norms") {
      setDegree(<h2>Bsc Sociology</h2>);
    } else if (career.field === "Human affairs & Public Relations") {
      setDegree(<h2>BA Journalism</h2>);
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
                <option>The Constitution</option>
                <option>Politics</option>
                <option>Societal norms</option>
                <option>Human affairs & Public Relations</option>
              </select>
              <button className="btn btn-outline-primary" onClick={selectField}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {degree}
    </div>
  );
}

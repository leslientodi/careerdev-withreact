import React from "react";

export default function Land() {
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
    if (career.field === "Landscapes and Topography") {
      setDegree(
        <>
          <h2>Bsc Geomatics</h2>
          <h2>Bsc Land Surveying</h2>
        </>
      );
    } else if (career.field === "Weather and Climate") {
      setDegree(<h2>Bsc Meteorology</h2>);
    } else if (career.field === "Rocks and Minerals") {
      setDegree(<h2>Bsc Geology</h2>);
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
                <option>Landscapes and Topography</option>
                <option>Weather and Climate</option>
                <option>Rocks and Minerals</option>
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

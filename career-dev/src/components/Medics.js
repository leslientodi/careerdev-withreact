import React from "react";

export default function Medics() {
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
    if (career.field === "Human Eye") {
      setDegree(<h2>Bsc Optometry</h2>);
    } else if (career.field === "Dentition") {
      setDegree(<h2>Bsc Dentistry</h2>);
    } else if (career.field === "Animal life") {
      setDegree(<h2>Bsc Vertinary</h2>);
    } else if (career.field === "Plant Anatomy") {
      setDegree(<h2>Bsc Horticulture</h2>);
    } else if (career.field === "The skin") {
      setDegree(<h2>Bsc Dermatology</h2>);
    } else if (career.field === "The brain and cognitive abilities") {
      setDegree(<h2>Bsc Psychology</h2>);
    } else if (career.field === "Food and Nutrition") {
      setDegree(
        <>
          <h2>Bsc Food Science</h2>
          <h2>Bsc Dietetics</h2>
        </>
      );
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
                <option>Human Eye</option>
                <option>Dentition</option>
                <option>Animal life</option>
                <option>Plant Anatomy</option>
                <option>The skin</option>
                <option>The brain and cognitive abilities</option>
                <option>Food and Nutrition</option>
              </select>
              <button className="btn btn-outline-primary" onClick={selectField}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="degree py-5 text-ligth shadow">
        <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
          {degree}
        </div>
      </div>
    </div>
  );
}

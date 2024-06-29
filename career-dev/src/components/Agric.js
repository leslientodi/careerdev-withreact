import React from "react";

export default function Agric() {
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
    if (career.field === "Animal husbandry") {
      setDegree(<h2>Bsc Dairy and meat production</h2>);
    } else if (career.field === "Animal & Crop production") {
      setDegree(
        <>
          <h2>Bsc Agriculture</h2>;<h2>Bsc Agricultural Engineering</h2>
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
                <option>Animal husbandry</option>
                <option>Animal & Crop production</option>
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

import React from "react";

export default function AllOnes() {
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
    if (career.field === "Human Anatomy") {
      setDegree(<h2>Bsc Human Biology(Medicine) </h2>);
    } else if (career.field === "Organic Chemistry") {
      setDegree(<h2>Bsc Pharmacy</h2>);
    } else if (career.field === "Lab Equipments") {
      setDegree(<h2>Bsc Biomedical Engineering</h2>);
    } else if (career.field === "Heat and Mechanics") {
      setDegree(<h2>Bsc Mechanical Engineering</h2>);
    } else if (career.field === "Electricity") {
      setDegree(<h2>Bsc Electrical Engineering</h2>);
    } else if (career.field === "Strength Of Materials") {
      setDegree(<h2>Bsc Civil Engineering</h2>);
    } else if (career.field === "Thermodynamics") {
      setDegree(<h2>Bsc Aerospace Engineering</h2>);
    }
  }

  return (
    <div className="menu-section py-5 text-ligth shadow">
      <div className="container d-flex flex-column align-items-center">
        <h2>Select your field of interest</h2>
        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
          <select
            id="field"
            value={career.field}
            onChange={handleInput}
            name="field"
          >
            <option>-- Choose field --</option>
            <option>Heat and Mechanics</option>
            <option>Electricity</option>
            <option>Strength Of Materials</option>
            <option>Thermodynamics</option>
            <option>Human Anatomy</option>
            <option>Organic Chemistry</option>
            <option>Lab Equipments</option>
          </select>
          <button class="submit" onClick={selectField}>
            Submit
          </button>
        </div>
      </div>

      {degree}
    </div>
  );
}

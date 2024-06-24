import React from "react";

export default function Chem() {
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
    if (career.field === "Physical Chemistry") {
      setDegree(<h2>Bsc Chemical Engineering </h2>);
    } else if (career.field === "Organic Chemistry") {
      setDegree(<h2>Bsc Petroleum Engineering</h2>);
    } else if (career.field === "Inorganic Chemistry") {
      setDegree(<h2>Bsc Biochemistry</h2>);
    }
  }

  return (
    <>
      <h2>Select your field of interest</h2>
      <select
        id="field"
        value={career.field}
        onChange={handleInput}
        name="field"
      >
        <option>-- Choose field --</option>
        <option>Physical Chemistry</option>
        <option>Organic Chemistry</option>
        <option>Inorganic Chemistry</option>
      </select>
      <button class="submit" onClick={selectField}>
        Submit
      </button>
      {degree}
    </>
  );
}

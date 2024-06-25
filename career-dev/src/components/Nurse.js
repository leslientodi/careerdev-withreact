import React from "react";

export default function Nurse() {
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
    if (career.field === "Physiology") {
      setDegree(<h2>Bsc Nursing</h2>);
    } else if (career.field === "Reproduction") {
      setDegree(<h2>Bsc Midwifery</h2>);
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
        <option>Physiology</option>
        <option>Reproduction</option>
      </select>
      <button class="submit" onClick={selectField}>
        Submit
      </button>
      {degree}
    </>
  );
}

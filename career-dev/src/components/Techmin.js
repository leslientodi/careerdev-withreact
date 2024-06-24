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
    <>
      <h2>Select your field of interest</h2>
      <select
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
      <button class="submit" onClick={selectField}>
        Submit
      </button>
      {degree}
    </>
  );
}

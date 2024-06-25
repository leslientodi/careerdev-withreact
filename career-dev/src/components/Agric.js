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
    <>
      <h2>Select your field of interest</h2>
      <select
        id="field"
        value={career.field}
        onChange={handleInput}
        name="field"
      >
        <option>-- Choose field --</option>
        <option>Animal husbandry</option>
        <option>Animal & Crop production</option>
      </select>
      <button class="submit" onClick={selectField}>
        Submit
      </button>
      {degree}
    </>
  );
}

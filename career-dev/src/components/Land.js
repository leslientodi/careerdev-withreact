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
    <>
      <h2>Select your field of interest</h2>
      <select
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
      <button class="submit" onClick={selectField}>
        Submit
      </button>
      {degree}
    </>
  );
}

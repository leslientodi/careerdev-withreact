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
    <>
      <h2>Select your field of interest</h2>
      <select
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
      <button class="submit" onClick={selectField}>
        Submit
      </button>
      {degree}
    </>
  );
}

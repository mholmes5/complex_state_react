import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });
  //const [lastName, setLastName] = useState("");

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }

  function updateFullName(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    console.log(inputName + " " + newValue);
    if (inputName === "fName") {
      setFullName({ firstName: newValue });
    } else if (inputName === "lName") {
      setFullName({ lastName: newValue });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={updateFullName}
          name="fName"
          placeholder="First Name"
          //value={fullName.firstName}
        />
        <input
          onChange={updateFullName}
          name="lName"
          placeholder="Last Name"
          //value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

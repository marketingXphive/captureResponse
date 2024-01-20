import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FormStep2 from "./FormStep2.js";
import FormStep3 from "./FormStep3.js";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const isFormValid = name !== "" && isEmailValid;

  const handleNameChange = (e) => {
    const enteredName = e.target.value;
    setName(enteredName);
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    // Validate email format using a regular expression
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail);
    setIsEmailValid(isValid);
    setEmail(enteredEmail);
  };

  return (
    <>
      <div className="form-container">
        <h2>Step 1: Enter Your Details</h2>
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
            {!isEmailValid && (
              <div className="error-message">(Enter a valid email address)</div>
            )}
          </label>
          <Link to={isFormValid ? "/step2" : "#"}>
            <button
              type="button"
              className="next-button"
              disabled={!isFormValid}
            >
              Next
            </button>
          </Link>
        </form>
      </div>
      <Routes>
        <Route
          path="/step2"
          element={
            <FormStep2
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
              name={name}
              email={email}
            />
          }
        />
        <Route
          path="/step3"
          element={
            <FormStep3
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
              name={name}
              email={email}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

import { ErrorFactory } from "@firebase/util";
import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // confirmpassword is matched
    if (password !== confirmPassword) {
      alert("Password is not matched!");
      return;
    }
    // see if authenticated or not
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      //   console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use!");
      } else {
        console.log("User creation encountered an error", error);
      }
    }

    // else create to the db
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name:</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email:</label>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Passwrod:</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password:</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

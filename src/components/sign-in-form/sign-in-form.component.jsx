import { useState} from 'react'

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";




import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  
  


  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  
  const signInFromGoogle = async () => {
     await signInWithGooglePopup();
    
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      )
        

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password for Email");
          break;
          case "auth/user-not-found":
            alert("no user associeated with this email");
            break;
        default:
          console.log(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            required: true,
            name: "email",
            type: "email",
            onChange: handleChange,
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            required: true,
            name: "password",
            type: "password",
            onChange: handleChange,
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType="google" onClick={signInFromGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

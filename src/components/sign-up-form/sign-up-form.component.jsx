import { useState } from "react";


import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";



import { SignUpContainer } from "./sign-up-form.styles";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

 
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );


      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()



    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use')
        } else{

            console.log("user creation encourtered an error", error);
        }
    }
  };



  return (
    <SignUpContainer>
        <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
      
        <FormInput
            label='Display Name'
            inputOptions = {{
                required:true,
                onChange:handleChange,
                name:"displayName",
                type:"text",
                value:displayName
            }
            }
        />

       
        <FormInput
        label='Email'
        inputOptions = {
            {
                required:true,
                onChange:handleChange,
                name:"email",
                type:"email",
                value:email

            }
        }
        />

       
        <FormInput
        label='Password'
        inputOptions={{
            required: true,
            onChange:handleChange,
            name:"password",
            type:"password",
            value:password

        }}
        />

   
        <FormInput
        label='Comfirm Password'
         inputOptions = {{required:true,
          onChange:handleChange,
          name:"confirmPassword",
          type:"password",
          value:confirmPassword}}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

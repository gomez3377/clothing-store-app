import { useState } from "react";


import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignUpForm = ({formFields, handleChange}) => {
  
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName })


    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use')
        } else{

            console.log("user creation encourtered an error", error);
        }
    }
  };



  return (
    <div className="sign-up-container">
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
    </div>
  );
};

export default SignUpForm;

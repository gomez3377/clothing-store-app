import { useState } from "react";



import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  

const Authentication = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
      };
 
  return (
    <div className="authentication-container">
      <SignInForm handleChange={handleChange} formFields={formFields}/>

      
      
      <SignUpForm handleChange={handleChange} formFields={formFields}/>
    </div>
  );
};

export default Authentication;

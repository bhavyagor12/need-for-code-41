import { useState } from 'react';
import './Login.css';
import FormInput from '../components/FormInput';
function Login() {
  const[values,setValues]=useState({
    username:'',
    email:'',
    birthday:'',
    password:'',
    confirmPassword:''
  })
  const inputs=[
    {
      id:1,
      name:'SAPID',
      type:'text',
      placeholder:'SAPID',
      errorMessage:"SAPID should be 10 digits and shouldn't include any other characters!",
      label:'SAPID',
      pattern: "^[0-9]{10}$",
      required:true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password should be 10 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange=(e)=>{
    setValues({...values,
      [e.target.name]:e.target.value})
  }

  console.log(values);

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-3xl my-2'>LOGIN</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
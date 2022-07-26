import { useState } from 'react';
import './Login.css';
import FormInput from '../components/FormInput';
import {useDispatch} from 'react-redux';
import {loginFailure,loginSuccess,loginStart} from '../../redux/userSlice';
import axios from 'axios';

function Login() {
  const[values,setValues]=useState({
   sapid:'',
   email : '',
   password:'',

  })

  const dispatch=useDispatch();
  const inputs=[
    {
      id:1,
      name:'sapid',
      type:'text',
      placeholder:'sapid',
      errorMessage:"sapid should be 10 digits and shouldn't include any other characters!",
      label:'sapid',
      // pattern: "^[0-9]{10}$",
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
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ]

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(loginStart());
  //   try {
  //     const res =  axios.post("http://localhost:8000/auth/signin",{values});
  //     // dispatch(loginSuccess(res.data));
  //     console.log(res.data);
  //   } catch (err) {
  //     dispatch(loginFailure());
  //   }
  // }

  const onChange=(e)=>{
    setValues({...values,
      [e.target.name]:e.target.value})
  }
 
  
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("auth/signin", {values});
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
    
  };
  console.log(values);

  return (
    <div className='app'>
      <form>
        <h1>LOGIN</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        
        <button onClick={handleLogin}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
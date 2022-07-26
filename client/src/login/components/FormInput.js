import React, { useState } from 'react'
import './FormInput.css'

const FormInput = (props) => {
    const{label,errorMessage,onChange,id,...others}= props;
    const[focused,setFocused]= useState(false);
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...others} onChange={onChange}  />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
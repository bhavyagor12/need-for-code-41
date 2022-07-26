import React, { useState } from 'react'
import './FormInput.css'

const FormInput = (props) => {
    const{label,errorMessage,onChange,id,...others}= props;
    const[focused,setFocused]= useState(false);

    const handleFocus=()=>{
      setFocused(true);
    }
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...others} onChange={onChange}  onBlur={handleFocus} onFocus={()=>{others.name==='confirmPassword' && setFocused(true)}} focused={focused.toString()} />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
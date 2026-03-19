import React from 'react'

const InputText=({texto, type, value, onChange})=>{
    return(
        <div>
        <label>{texto}</label>
        <input type={type} value={value} onChange={onChange}/>
        </div>
    )
}

export default InputText
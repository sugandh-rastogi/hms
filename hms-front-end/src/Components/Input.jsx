import React from 'react';
import { useFormik } from 'formik';

const Input = ({ id, name, type, onChange, onBlur, values }) => {
  return (
    <div className="text-white grid grid-cols-3 auto-cols-auto ">
      <label htmlFor={id} >{name}</label>
      <input
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={values}
        className="px-2 border bg-black col-span-2"
      />
    </div>);
}

export default Input;


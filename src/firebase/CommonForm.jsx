import React from 'react'
import CommonInput from './CommonInput';



const formElementType = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea'
}

const CommonForm = ({ formControls = [], buttonText, setFormData, formData, onSubmit }) => {

  function renderFormElement(getCurrentFormControl, getFormData) {

    let element = null;

    switch (getCurrentFormControl.componentType) {
      case formElementType.INPUT:
        element = (<CommonInput
          type={getCurrentFormControl.type}
          placeholder={getCurrentFormControl.placeholder}
          value={getFormData[getCurrentFormControl.name]}
          name={getCurrentFormControl.name}
          onChange={(event) => setFormData({
            ...formData, [getCurrentFormControl.name]: event.target.value
          })}
        />)
        break;
      default:
        element = (<CommonInput
          type={getCurrentFormControl.type}
          placeholder={getCurrentFormControl.placeholder}
          value={getFormData[getCurrentFormControl.name]}
          name={getCurrentFormControl.name}
          onChange={(event) => setFormData({
            ...formData, [getCurrentFormControl.name]: event.target.value
          })}
        />)
        break;
    }
    return element;
  }

  return <form onSubmit={onSubmit}>
    {
      formControls.map((singleFormControl, index) => <div key={index}>{renderFormElement(singleFormControl, formData)}</div>)
    }
    <button className='mt-5 w-full cursor-pointer py-1.5 px-3 font-semibold  bg-red-600 text-white transition rounded-md hover:bg-red-500' type='submit'>{buttonText || "Submit"}</button>
  </form>
}

export default CommonForm

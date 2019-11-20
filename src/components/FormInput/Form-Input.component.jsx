import React from 'react';
import { InputWrapper, Input } from './Form-Input.styled';

const FormInput = ({handleChange, label ,...otherProps}) => {
    return (
        <InputWrapper>
            <Input onChange={handleChange} {...otherProps} />
            {
                label && <label>{label}</label>
            }
        </InputWrapper>
    )
}

export default FormInput;
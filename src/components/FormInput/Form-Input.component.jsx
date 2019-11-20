import React from 'react';
import { InputWrapper, Input } from './Form-Input.styled';

const FormInput = ({handleChange, width ,label ,...otherProps}) => {
    return (
        <InputWrapper width={width}>
            <Input onChange={handleChange} {...otherProps} />
            {
                label && <label>{label}</label>
            }
        </InputWrapper>
    )
}

export default FormInput;
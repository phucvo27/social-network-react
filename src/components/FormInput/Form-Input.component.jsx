import React from 'react';
import { InputWrapper, Input } from './Form-Input.styled';

const FormInput = ({handleChange ,...otherProps}) => {
    return (
        <InputWrapper>
            <Input onChange={handleChange} {...otherProps} />
        </InputWrapper>
    )
}

export default FormInput;
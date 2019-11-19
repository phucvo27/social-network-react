import React from 'react';
import { Button } from './Button.styled';


const ButtonComplex = ({ typeBtn, value, handleChange })=>{
    return (
        <Button typeBtn={typeBtn} value={value} onclick={handleChange}>
            {value}
        </Button>
    )
}
export default ButtonComplex
import React from 'react';
import { HeaderWrapper, HeaderTitle } from './Header.styled';
import FormInput from '../../components/FormInput/Form-Input.component'

const Header = ()=>{
    return (
        <HeaderWrapper>
            <HeaderTitle>Home Page</HeaderTitle>
            <FormInput 
                type='text'
                placeholder='Search people here'
                width='30rem'
            />
        </HeaderWrapper>
    )
}

export default Header
import styled from 'styled-components';


export const Grid = styled.section`

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr 1fr
    grid-column-gap: 2rem;
    width: 130rem;
    margin: 5rem auto;

    &.home-page{
        margin: 10rem auto;
    }
    
`

export const LeftContent = styled.section`
    border-radius: .5rem;
    width: 100%;
    @media screen and  (max-width: 60rem){
        display:none
    }
`
export const CenterContent = styled.section`

    width: 100%;

`
export const RightContent = styled.section`

    
    width: 100%;
    border-radius: .5rem;

    @media screen and  (max-width: 60rem){
        display:none
    }

`
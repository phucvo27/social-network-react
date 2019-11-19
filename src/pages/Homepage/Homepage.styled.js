import styled from 'styled-components';


export const HomepageWrapper = styled.main`

    display: grid;
    grid-templates-rows: 1;
    grid-template-columns: 1fr 2fr 1fr
    grid-column-gap: 2rem;
    max-width: 120rem;
    margin: 10rem auto;

    @media screen and  (max-width: 128rem){
        width: 110rem;
    }
    @media screen and  (max-width: 60rem){
        margin: 10rem auto;
        width: 80%;
        grid-template-columns: 1fr;
    }
`

export const LeftContent = styled.section`

    background-color: #fff;
    width: 100%;
    height: 50rem;
    @media screen and  (max-width: 60rem){
        display:none
    }
`
export const CenterContent = styled.section`

    width: 100%;
    height: 50rem;

    

`
export const RightContent = styled.section`

    background-color: #fff;
    width: 100%;
    height: 50rem;

    @media screen and  (max-width: 60rem){
        display:none
    }

`
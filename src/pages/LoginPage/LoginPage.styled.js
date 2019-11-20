import styled, { keyframes } from 'styled-components';

const sidedownscroll = keyframes`
    from {
        background-position: 0 0;
    }
    to {
        background-position: -2000px 2000px;
    }
`;
export const Wrapper = styled.section`

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom right, rgba(0,0,0, .4), rgba(0,0,0,.5)) , url('https://html.crumina.net/html-olympus/img/landing-users.png');
    background-size: auto;
    background-repeat: repeat;
    background-position: 0 0;
    animation: ${sidedownscroll} 30s linear infinite;

`
export const Container = styled.div`

    background-color: #fff;
    padding: 2.5rem;
    height: 40rem;
    width: 35rem;
    border-radius: .5rem;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    h1 {
        text-align: center;
        font-size: 2.2rem;
        font-weight: normal;
    }

`
export const Form = styled.form`

    width: 100%;
    
    input, label {
        font-size: 1.6rem;
    }
    div {
        margin-bottom: 2rem;
    }
    button {
        display: block;
        width: 100%;
    }
    button:hover {
        transform: translateY(0)
    }
    span {
        display: block;
        margin: 2rem 0;
        text-align center;
        font-size: 1.4rem;
        cursor: pointer;
    }

`

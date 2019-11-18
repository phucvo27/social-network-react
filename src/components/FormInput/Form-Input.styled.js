import styled from 'styled-components';

export const InputWrapper = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center
    
`
export const Input = styled.input`

    color: #9a9fbf
    padding: 1.5rem
    border: none;
    font-size: 1.2rem;
    outline: none;
    border-radius: .5rem;
    width: ${props => props.width}
    background-color: #494c62

    ::placeholder{
        color : #fff;
    }
`
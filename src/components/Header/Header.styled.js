import styled from 'styled-components';

export const HeaderWrapper = styled.header`

    position: fixed;
    top: 0;
    left: 0;
    height: 7rem;
    width: 100%;
    background-color: #3f4257
    padding: 0 15rem;
    display: flex;
    justify-content: flex-start;
    align-items: center
    z-index: 50;
`
export const HeaderTitle = styled.h1`

    font-size: 1.6rem;
    font-weight: normal
    color: #fff;
    text-transform: uppercase
    margin-right: 2rem;
`

export const HeaderForm = styled.div`

    margin-right: auto

`

export const HeaderInteract = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 15rem;
`
export const HeaderItem = styled.div`

    position: relative;
    cursor: pointer;
    > .icon {
        height: 1.6rem;
        width: 1.6rem;
        fill: 'yellow'
    }

    > .notification{
        background-color: red;
        color: #fff;
        height: 1.5rem;
        width: 1.5rem;
        border: none;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: -1rem;
        right: -1rem;

    }

`

export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    width: 38rem;
    height: 0rem;
    padding: 1.2rem;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: .5rem;
    

    opacity: 0;
    visibility: hidden;
    transition: all .2s;

    ${HeaderItem}:hover & {
        opacity: 1;
        visibility: visible;
        height: 20rem;
    }
`

export const DropdownTitle = styled.h4`

    font-size: 1.2rem;
    color: #333;


`
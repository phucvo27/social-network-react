import styled from 'styled-components';


export const UserWrapper = styled.main`

    width: 120rem;
    margin: 10rem auto;

`
export const UserHeader = styled.section`

    width: 100%;
    margin-bottom: 2rem;
`
export const HeaderThumb = styled.div`

    width: 100%;
    
    position: relative
    
    img {
        width: 100%;
        border-radius: .5rem .5rem 0rem 0rem;
    }
`
export const Author = styled.div`

    position: absolute;
    left: 0;
    bottom: -2rem;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;


` 
export const AuthorAvatar = styled.div`

    
    margin-right: 2rem;
    margin-left: 2rem;
    img {
        height: 13rem
        width: 13rem;
        border-radius: 50%;
        border: .6rem solid #fff;
    }
`

export const AuthorName = styled.div`

    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    h1 {
        font-size: 2.2rem;
        font-weight: normal;
        color: #fff;
        margin-bottom: 1rem;

    }
    p {
        font-size: 1.6rem;
        color: #fff;
    }

`
export const UserProfileSection = styled.section`

    width: 100%;
    display : flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;
    padding: 3.5rem 0;

    font-size: 1.6rem;

`
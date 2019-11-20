import styled from 'styled-components';


export const UserWrapper = styled.main`

    width: 130rem;
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
export const Content = styled.section`

    padding: .5rem 2rem;
    border: 1px solid #e6ecf5;
    margin-bottom: 1.5rem;
    background-color: #fff;
    border-radius: .5rem;
`
export const Title = styled.h1`

    font-size: 2rem;
    padding: 2rem 2.3rem;
    border-bottom: .1rem solid #edf2f6;
`

export const LastestPhoto = styled.section`

    display: grid;
    margin-top: 2rem;
    padding: 2.4rem 2.3rem 2.3rem;
    grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
    grid-gap: .5rem;

    img {
        width: 100%;
        border-radius: .5rem;
    }

`

export const Profile = styled.section`

    padding: 2.4rem 2.3rem 2.3rem;

`

export const Row = styled.div`

    display: flex;
    padding: 2rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center:

    :not(:first-child){
        border-top: .1rem solid #edf2f6;
    }

    .title {
        font-weight: bold;
        font-size: 1.4rem;
        margin-right: 2rem;
    }

    .desc {
        font-size: 1.2rem;
        font-weight: normal;
    }

`
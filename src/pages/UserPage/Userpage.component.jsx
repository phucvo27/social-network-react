import React from 'react';
import { UserWrapper, UserHeader, HeaderThumb, Author, AuthorAvatar, AuthorName, UserProfileSection } from './Userpage.styled';
import { Grid, LeftContent, CenterContent, RightContent } from '../../components/GridWrapper/GridWrapper.styled'

import Card from '../../components/Card/Card.component';
import image from '../../assets/test-image.jpg';
class UserPage extends React.Component {

    render(){
        return (

            <UserWrapper>
                <UserHeader>
                    <HeaderThumb>
                        <img src='https://html.crumina.net/html-olympus/img/top-header1.jpg' alt='thumbnail' />
                        <Author>
                            <AuthorAvatar>
                                <img src='https://html.crumina.net/html-olympus/img/author-main1.jpg' alt='user-avatar' />
                            </AuthorAvatar>
                            <AuthorName>
                                <h1>Phuc Vo</h1>
                                <p>Full Stack Developer</p>
                            </AuthorName>
                        </Author>
                    </HeaderThumb>
                    <UserProfileSection>
                        <p>Timeline</p>
                        <p>About</p>
                        <p>Friend</p>
                        <p>Image</p>
                    </UserProfileSection>
                </UserHeader>
                <Grid>
                <LeftContent></LeftContent>
                <CenterContent>
                    <Card />
                    <Card listImage={[image]} />
                    <Card />
                </CenterContent>
                <RightContent></RightContent>
                </Grid>
            </UserWrapper>
        )
    }
}

export default UserPage;
//
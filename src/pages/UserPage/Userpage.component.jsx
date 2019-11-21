import React from 'react';
import { UserWrapper, UserHeader, HeaderThumb, Author, AuthorAvatar, AuthorName, UserProfileSection, Title, LastestPhoto, Content, Profile, Row } from './Userpage.styled';
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
                        <p>Friends</p>
                        <p>Images</p>
                    </UserProfileSection>
                </UserHeader>
                <Grid>
                <LeftContent>
                    <Content>
                        <Title>Profile</Title>
                        <Profile>
                            <Row>
                                <span className='title'>Name : </span>
                                <span className='desc'>Phuc Vo </span>
                            </Row>
                            <Row>
                                <span className='title'>Jobs : </span>
                                <span className='desc'>Full Stack JS Developer </span>
                            </Row>
                            <Row>
                                <span className='title'>Age : </span>
                                <span className='desc'>25 </span>
                            </Row>
                            <Row>
                                <span className='title'>Location : </span>
                                <span className='desc'>Viet Nam </span>
                            </Row>
                        </Profile>
                    </Content>
                </LeftContent>
                <CenterContent>
                    <Card listImage={['https://html.crumina.net/html-olympus/img/post-photo6.jpg']}/>
                    <Card />
                    <Card listImage={[image]} />
                </CenterContent>
                <RightContent>
                    <Content>
                        <Title>Lastest Photo</Title>
                        <LastestPhoto>
                            <img src='https://html.crumina.net/html-olympus/img/last-photo10-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot11-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot12-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot13-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot14-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot15-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot16-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot17-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot18-large.jpg' alt='latest' />
                        </LastestPhoto>
                    </Content>
                </RightContent>
                </Grid>
            </UserWrapper>
        )
    }
}

export default UserPage;
/**



 */
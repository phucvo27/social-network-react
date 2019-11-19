import React from 'react';
import { HomepageWrapper , LeftContent , CenterContent, RightContent} from './Homepage.styled';

import Card from '../../components/Card/Card.component';
import image from '../../assets/test-image.jpg';
import StatusForm from '../../components/StatusForm/Status-Form.component'
const HomePage = ()=>{
    return (
        <HomepageWrapper>
            <LeftContent></LeftContent>
            <CenterContent>
                <StatusForm />
                <Card />
                <Card listImage={[image]} />
                <Card />
            </CenterContent>
            <RightContent></RightContent>
        </HomepageWrapper>
    )
}

export default HomePage;
import React from 'react';
import styled from 'styled-components';
import ImageSection from '../components/ImageSection';
import ReviewSection from '../components/ReviewSection';
import Titles from '../components/Titles';
import { MainLayout } from '../styles/Layouts';


function Aboutpage() {
    return (
        <MainLayout>
            <AboutStyled>
            <Titles title={'About Me'} span={'About me'}/>
                <ImageSection/>
                <ReviewSection/>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section `

`;

export default Aboutpage

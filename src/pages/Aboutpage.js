import React from 'react';
import styled from 'styled-components';
import Titles from '../components/Titles';
import { MainLayout } from '../styles/Layouts';

function Aboutpage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Titles title={'About Me'} span={'About me'}/>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section `

`;

export default Aboutpage

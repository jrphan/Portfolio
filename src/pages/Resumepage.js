import React from 'react';
import styled from 'styled-components';
import Resume from '../components/Resume';
import Skills from '../components/Skills';

function Resumepage() {
    return (
        <ResumeStyled>
            <Skills/>
            <Resume/>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section ``;

export default Resumepage

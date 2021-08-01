import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import { InnerLayout } from '../styles/Layouts';
import ResumItem from './ResumItem';
import SmallTitle from './SmallTitle';
import Titles from './Titles';

function Resume() {
    return (
        <ResumeComponentStyled>
            <MainLayout className={'resumeLayout'}>
                <Titles title={'Resume'} span={'Resume'}/>
                <InnerLayout>
                    <SmallTitle title={'Working Experince'}/>
                    <div className="resume-content">
                        <ResumItem 
                            time={'2019 - 2023:'} 
                            title={'Ton Duc Thang University'} 
                            subtitle={'student'} 
                            text={'Information Technology'}
                            hreflink={'https://tdtu.edu.vn/en'}
                            link={'TDTU'}
                        />
                         <ResumItem 
                            time={'5/2021 - 7/2021:'} 
                            title={'CFD Crile'} 
                            subtitle={'student'} 
                            text={'Front end Developer'}
                            hreflink={'https://www.cfdtraining.vn/?fbclid=IwAR1k9XpeYACsn5OJ-SoEXyUCSpxuczibfbXZGt-eTF-VGndDmo9w0zW4iCo'}
                            link={'CFD Crile'}
                        />
                        
                    </div>
                </InnerLayout>
            </MainLayout>
        </ResumeComponentStyled>
    )
}

const ResumeComponentStyled = styled.section `
    .resumeLayout {
        padding: 0 5rem;
    }
`;

export default Resume

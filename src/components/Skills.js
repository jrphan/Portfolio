import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import { InnerLayout } from '../styles/Layouts';
import Titles from './Titles';
import html5 from '../img/html-5.png';
import css3 from '../img/css.png';
import js from '../img/js.svg.png';
import react from '../img/react.png';
import Aos from 'aos';
import "aos/dist/aos.css";

function Skills() {
    useEffect(() => {
        Aos.init({duration: 1000});
    },[])

    return (
        <SkillsStyled>
            <MainLayout>
                <Titles title={'My skills'} span={'My skills'}/>
                <InnerLayout className={'skills'}>
                    <div className='skill' data-aos="zoom-out">
                        <img src={html5} alt="logo"/>
                    </div>
                    <div className='skill' data-aos="zoom-out">
                        <img src={css3} alt="logo"/>
                    </div>
                    <div className='skill' data-aos="zoom-out">
                        <img src={js} alt="logo"/>
                    </div>
                    <div className='skill' data-aos="zoom-out">
                        <img src={react} alt="logo"/>
                    </div>
                </InnerLayout>
            </MainLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section `
    .skills {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-top: 5rem;
        padding-bottom: 0;

        .skill {
            width: 48%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3rem 0;
            margin: 2rem 0;
            box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.3);
            border-radius: 20px;
            border: 1px solid var(--border-color);
            transition: all 0.5s ease;

            @media screen and (max-width: 576px) {
                width: 100%;
            }

            &:hover {
                border: 1px solid var(--primary-color);
                transition: all 0.5s ease;
            }

            &:nth-child(2n + 1) {
                margin-right: 2rem;
                @media screen and (max-width: 576px) {
                    margin-right: 0;
                }
            }
            
            img {
                width: 15rem;
                height: 15rem;
            }
        }
    }
`;

export default Skills

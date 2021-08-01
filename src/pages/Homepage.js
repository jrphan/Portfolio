import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Particle from '../components/Particle';
import { Facebook } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { init } from 'ityped';
import Aos from 'aos';
import "aos/dist/aos.css";


function Homepage() {
    const textRef = useRef();

    useEffect(() => {
        Aos.init({duration: 1000});
    },[])

    useEffect(() => {
        init(textRef.current, {
            strings: ['Phan Duy Tâm', 'Front-end Developer'],
            backDelay: 1500,
            showCursor: true,
            backSpeed: 80
        })
    },[])

    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle/>
            </div>
            <div className="typography">
                <h1 data-aos="zoom-out">Hi I'm <span ref={textRef}></span></h1>
                <p data-aos="fade-up" data-aos-delay="200">
                   I'm a creative front-end Developer. <br/> I love create polished and meaningful user experience.
                </p>
                <div className="icons" data-aos="fade-up" data-aos-delay="300">
                    <a href="https://www.facebook.com/phantam0207/" target="_blank" rel="noreferrer" className="icon i-facebook">
                        <Facebook/>
                    </a>
                    <a href="https://github.com/jrphan" className="icon i-github" target="_blank" rel="noreferrer">
                        <GitHub/>
                    </a>
                    <a href="https://www.linkedin.com/in/phan-duy-t%C3%A2m-23b4a4213/" target="_blank" rel="noreferrer" className="icon i-linkedin">
                        <LinkedIn/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header `
    width: 100%;
    height: 100vh;
    position: relative;

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        text-align: center;
        width: 80%;

        h1 {
            @media screen and (max-width: 576px) {
                font-size: 1.5rem;
                span {
                    font-size: 1.63rem;
                }
            }

            .ityped-cursor {
                animation: blink 1s infinite;
            }

            @keyframes blink {
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            } 
        }

        p {
            letter-spacing: 1px;
            line-height: 25px;
            font-size: 1.05rem;
        }

        .icons {
            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
            padding: 0.2rem 0;
            
            
            .icon {
                padding: 10px;
                margin: 10px;

                border: 1px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                
                &:hover {
                    cursor: pointer;
                    color: var(--primary-color);
                    border: 1px solid var(--primary-color);
                    transition: all 0.5s ease;
                }
            }
        }
    }

`;

export default Homepage

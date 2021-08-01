import React, { useEffect } from 'react';
import styled from 'styled-components';
import avatar from '../img/avatar.jpg';
import Button from './Button';
import Aos from 'aos';
import "aos/dist/aos.css";

function ImageSection() {
    useEffect(() => {
        Aos.init({duration: 1000});
    },[])

    return (
        <ImageSectionStyled>
            <div className="img-content" data-aos="fade-up">
                <img src={avatar} alt="avatar"/>
            </div>
            <div className="text-content">
                <h4 data-aos="fade-up">I'm <span>Phan Duy Tâm</span></h4>
                <div className="dec" data-aos="fade-up" data-aos-delay="200">
                    djakljsfkljsadkjfsd dfjsddkfldsfj sdjkdsf sjdfjksdfjlsdjfsdldkfsldkdflksđfkjlsd
                    sdkjfskljfsfklsddf fdsjfsdklfsjdkf sdfkjdsfkd fskfsljskdfklsddfkjdskndsjhjfhwio 
                    ihfhisffjkjfsakjkjkdsfjasjfsfjsđkfsdfjsdkkjfd.
                </div>
                <div className="about-info">
                    <div className="info-title" data-aos="fade-up" data-aos-delay="300">
                        <p>Full name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                    </div>
                    <div className="info" data-aos="fade-up" data-aos-delay="400">
                        <p>:  Phan Duy Tâm</p>
                        <p>:  20</p>
                        <p>:  Viet Nam</p>
                        <p>:  English</p>
                        <p>:  Viet Nam</p>
                    </div>
                </div>
                <Button title={'Download CV'}/> 
            </div>
            
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div `
    display: flex;

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }

    .img-content {
       margin-top: 7rem;
       width: 100%;
       @media screen and (max-width: 576px) {
            margin-top: 6rem;
        }

       img {
           width: 90%;
           border-radius: 10px;
       }
    }

    .text-content {
        margin-top: 7rem;
        @media screen and (max-width: 576px) {
            margin-top: 2rem;
        }

        h4 {
            font-size: 2rem;
            color: var(--white-color);

            span {
                font-size: 2rem;
                color: var(--primary-color);
            }
        }

        .dec {
            padding: 1rem 0;
            line-height: 23px;
        }

        .about-info {
            display: flex;

            .info, .info-title {
                p {
                    padding: .2rem 0;
                }
            }

            .info-title {
                p {
                    padding-right: 0.5rem;
                }
            }
        }
    }
`;

export default ImageSection

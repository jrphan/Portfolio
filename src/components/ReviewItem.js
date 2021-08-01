import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import "aos/dist/aos.css";

function ReviewItem({text}) {
    useEffect(() => {
        Aos.init({duration: 1000});
    },[])

    return (
        <ReviewItemStyled  data-aos="fade-up">
            <p>{text}</p>
        </ReviewItemStyled>
    )
}

const ReviewItemStyled = styled.div `
    width: 48%;
    padding: 2rem 1rem;
    border-left: 3px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    border-radius: 20px;
    margin-top: 2rem;
    @media screen and (max-width: 576px) {
        width: 100%;
        margin-top: 3rem;
    }

    &:nth-child(2n+1) {
        margin-right: 1rem;
        @media screen and (max-width: 576px) {
            margin-right: 0;
        }
    }

    &::after {
        content: '';
        position: absolute;
        left: 1rem;
        top: 100%;
        border-width: .8rem;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
        border-style: solid;
    }

    p {
        padding: 1rem 0;
    }
`;

export default ReviewItem

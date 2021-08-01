import React, { useEffect } from 'react';
import styled from 'styled-components';
import PDT from '../data/PDT.pdf';
import Aos from 'aos';
import "aos/dist/aos.css";

function Button({title}) {
    useEffect(() => {
        Aos.init({duration: 1000});
    },[])
    
    return (
        <ButtonStyled href={PDT} download="PDT Portfolios" data-aos="fade-up" data-aos-delay="300">
            {title}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.a `
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;

    color: var(--white-color);
    transition: all 0.5s ease;

    cursor: pointer;
    border-radius: 10px;
    border: 1px solid var(--primary-color);

    &:hover {
        background-color: var(--primary-color);
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        border-radius: 15px;
    }
`;

export default Button

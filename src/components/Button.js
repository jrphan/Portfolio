import React from 'react';
import styled from 'styled-components';

function Button({title}) {
    return (
        <ButtonStyled>
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

    /* background-color: var(--primary-color); */
    color: var(--white-color);
    transition: all 1s ease;

    cursor: pointer;
    border-radius: 10px;
    border: 1px solid var(--primary-color);

    &:hover {
        background-color: var(--primary-color);
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        border-radius: 15px;
    }
`;

export default Button

import React from 'react';
import styled from 'styled-components';

function Titles({title, span}) {
    return (
        <TitlesStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitlesStyled>
    )
}

const TitlesStyled = styled.div `
    position: relative;

    h2 {
        color: var(--white-color);

        font-size: 3rem;
        font-weight: 600;

        text-transform: uppercase;
        position: absolute;

        &::before {
            content: "";
            top: 0;
            position: absolute;
            width: 50%;
            height: .2rem;
            background-image: var(--line-color);
            border-radius: 15px;
        }

        span {
            font-weight: 900;
            color: rgba(25,29,43,.44);
            font-size: 3rem;

            position: absolute;
            left: 0;
            top: 20%;
            z-index: -1;
        }
    }
`;

export default Titles

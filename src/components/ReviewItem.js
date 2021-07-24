import React from 'react';
import styled from 'styled-components';

function ReviewItem({text}) {
    return (
        <ReviewItemStyled>
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

    &:nth-child(2n+1) {
        margin-right: 1rem;
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

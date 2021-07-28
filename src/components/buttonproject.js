import React from 'react';
import styled  from 'styled-components';

function buttonproject({filter, button}) {
    return (
        <ButtonStyled>
            {
                button.map((but, i) => {
                    return <button key={i} onClick={() => {
                        filter(but);
                    } }>
                        {but}
                    </button>
                })
            }
        </ButtonStyled>
    )
}

const ButtonStyled = styled.div `
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    button {
        padding: 0.3rem 0.7rem;
        margin-right: 1rem;

        border-radius: 10px;
        border: 1px solid var(--primary-color);
        background-color: inherit;
        color: var(--white-color);
        cursor: pointer;
    }
`;

export default buttonproject

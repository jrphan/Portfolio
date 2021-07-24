import React from 'react';
import styled from 'styled-components';
import BusinessIcon from '@material-ui/icons/Business';

function SmallTitle({title}) {
    return (
        <SmallTitleStyled>
            <p><BusinessIcon/></p>
            <h3>{title}</h3>
        </SmallTitleStyled>
    )
}

const SmallTitleStyled = styled.div `
    display: flex;
    align-items: center;

    p {
        padding-right: 1rem;
    }

    h3 {
        color: var(--white-color);
        font-size:  1.5rem;
    }
`;

export default SmallTitle

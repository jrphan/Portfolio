import React from 'react';
import styled from 'styled-components';

function ResumItem({time, title, subtitle, text, hreflink, link}) {
    return (
        <ResumeItemStyled>
            <div className="time">
                <p>{time}</p>
            </div>
            <div className="des">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
                <a href={hreflink} target="_blank" rel="noreferrer">{link}</a>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div `
    display: flex;
    padding-top: 2rem;

    .time {
        width: 20%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        p {
            display: inline-block;
        }
    }

    .des {
        h5 {
            color: var(--primary-color);
            font-size: 1.5rem;
        }
        h6 {
            padding: 0.5rem 0;
        }
        a {
            text-decoration: underline;
            /* color: var(--primary-color); */
        }
    }
`;

export default ResumItem

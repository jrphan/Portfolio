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
        position: relative;

        @media screen and (max-width: 578px) {
            margin-right: 2rem;
        }
 
        p {
            display: inline-block;
        }


        &::before {
            content: '';
            position: absolute;
            left: -15px;
            top: 7px;
            height: 5px;
            width: 5px;
            border-radius: 50%;
            border: 1px solid var(--border-color);

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

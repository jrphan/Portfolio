import React from 'react';
import styled from 'styled-components';


function ContactItem({icon, title, contact, contact1, href}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>

            <div className="right-content">
                <h6>{title}</h6>
                <a href={href}>{contact}</a>
            </div>
            
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div `
    padding: 2rem;
    @media screen and (max-width: 576px) {
        margin-top: 1.5rem;
    }

    background-color: var(--background-dark-grey);
    border-radius: 15px;

    display: flex;
    transition: all 0.5s ease;

    &:hover {
        box-sizing: border-box;
        border: 0.5px solid var(--primary-color);
        cursor: pointer;
        transition: all 0.5s ease;
    }

    .right-content {
        h6 {
            color: var(--white-color);
        }
        a {
            transition: all 0.5s ease;
            &:hover {
                color: var(--primary-color);
                transition: all 0.5s ease;
            }
        }
    }

    .left-content {
        p {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export default ContactItem

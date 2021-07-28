import React from 'react';
import styled from 'styled-components';

function Menu({menuItem}) {
    return (
        <MenuStyled>
            {
                menuItem.map((item) => {
                    return <div className="grid-item" key={item.id}>
                        <div className="project">
                            <div className="project-img">
                                <img src={item.img} alt=""/>
                            </div>
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                            <ul>
                                <li>
                                    <a href={item.link} target="_blank" rel="noreferrer">{item.link}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                })
            }
        </MenuStyled>
    )
}

const MenuStyled = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    .grid-item {
        border: 2px solid var(--border-color);
        border-radius: 10px;
        transition: all 0.5s ease;

        &:hover {
            border: 2px solid var(--primary-color);
            transition: all 0.5s ease;
        }
        .project {
            display: block;
            position: relative;
            padding: 1rem;

            &-img {
                img {
                    border-radius: 10px;
                    width: 100%;
                    height: 35vh;
                    object-fit: cover;
                    opacity: 0.9;
                }
            }
        }
    }
`;

export default Menu

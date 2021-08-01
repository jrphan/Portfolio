import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import "aos/dist/aos.css";

function Menu({menuItem}) {
    useEffect(() => {
        Aos.init({duration: 1000});
    },[])

    return (
        <MenuStyled>
            {
                menuItem.map((item) => {
                    return <div className="grid-item" key={item.id} data-aos="fade-up">
                        <div className="project" >
                            <div className="project-img">
                                <img src={item.img} alt=""/>
                            </div>
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                            {/* <p>{item.des}</p> */}
                            <a href={item.link} target="_blank" rel="noreferrer">Link: {item.link}</a>
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

    @media screen and (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }

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

            @media screen and (max-width: 576px) {
                padding: 2rem;
            }

            h5 {
                font-size: 1.5rem;
                padding: 0.5rem 1rem;
            }

            &-img {
                img {
                    border-radius: 10px;
                    width: 100%;
                    height: 35vh;
                    object-fit: cover;
                    opacity: 0.9;
                }
            }

            p, a {
                padding: 0 1rem;
            }
        }
    }
`;

export default Menu

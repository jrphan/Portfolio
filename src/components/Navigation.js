import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../img/avatar.jpg';
import { Facebook } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';


function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="avatar"/>
                <div className="icons">
                    <a href="https://www.facebook.com/phantam0207/"  className="icon i-facebook">
                        <Facebook/>
                    </a>
                    <a href="https://github.com/jrphan" className="icon i-github">
                        <GitHub/>
                    </a>
                    <a href="https://www.linkedin.com/in/phan-duy-t%C3%A2m-23b4a4213/" className="icon i-linkedin">
                        <LinkedIn/>
                    </a>
                </div>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 JR Phan</p>
            </footer>
                  
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;

    border-right: 5px solid var(--border-color);

    .avatar {
        width: 65%;
        border-bottom: 1px solid var(--border-color);
        padding: 1rem 0;

        img {
            width: 100%;   
            object-fit: cover;


            border-radius: 50%;
            border: 6px solid var(--border-color);
        }

        .icons {
            display: flex;
            align-items: flex-end;
            justify-content: center;

            .icon {
                padding: 0 10px;
                padding-top: 5px;
                transition: all 0.4s;

                &:hover {
                    color: var(--white-color);
                    transition: all 0.4s;
                }
            }
        }
    }

    .nav-items {
        width: 100%;

        text-align: center;

        .active-class {
            background-color: var(--border-color);
            color: var(--white-color);
        }
        .nav-item {
            display: block;
            
            a {
                padding: 0.6rem 0;
                display: block;
                
                position: relative;
                
                &:hover {
                    transition: all 0.8s cubic-bezier(.69,.37,0,1.2);

                    background-color: var(--border-color);
                    color: var(--white-color);

                    font-weight: bold;
                    font-size: 1.015rem;
                }

                &::before {
                    content: '';

                    position: absolute;
                    bottom: 0;
                    left: 0;

                    width: 0rem;
                    height: 100%;

                    background-color: var(--primary-color);
                    transition: all 0.5s cubic-bezier(.69,.37,0,1.2);
                }

                &:hover {
                    &::before {
                        width: 0.25rem;
                        transition: all 0.5s cubic-bezier(.69,.37,0,1.2);
                    }
                }
            }
        }
    }

    .footer {
        color: var(--white-color);
        width: 80%;
        border-top: 1px solid var(--border-color);

        display: flex;
        align-items: center;
        justify-content: center;
        
        p {
            padding: 1rem 0;
        }
    }
`;

export default Navigation

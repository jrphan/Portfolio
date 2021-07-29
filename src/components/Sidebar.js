import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({navToggle, btn, setBtn, setNavToggle}) {
    return (
        <SidebarStyle className={`${navToggle ? 'nav-toggle' : '' }`}>
            <Navigation btn={btn} setBtn={setBtn} navToggle={navToggle} setNavToggle={setNavToggle}/>
        </SidebarStyle>
    )
}

const SidebarStyle = styled.div `
    width: 16rem;
    height: 100vh;
    
    position: fixed;
    top: 0;
    left: 0;

    background-color: var(--sidebar-dark-color);
    transition: all 0.4s ease;
    @media screen and (max-width: 576px) {
        &.nav-toggle {
            transform: translateX(0);
            transition: all 0.4s ease;
        }
        transform: translateX(-100%);
        transition: all 0.4s ease;
        z-index: 10;
    }
`;

export default Sidebar

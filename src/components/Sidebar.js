import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar() {
    return (
        <SidebarStyle>
            <Navigation/>
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
`;

export default Sidebar

import React from 'react';
import styled from 'styled-components';

function Sidebar() {
    return (
        <SidebarStyle>
        </SidebarStyle>
    )
}

const SidebarStyle = styled.div `
    width: 16.3rem;
    height: 100vh;
    
    position: fixed;
    top: 0;
    left: 0;

    background-color: var(--sidebar-dark-color);
`;

export default Sidebar

import React, { useState } from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Titles from '../components/Titles';
import projects from '../data/project';
import Menu from '../components/Menu';
import Buttonproject from '../components/buttonproject';

const allButtons = ['All', ...new Set(projects.map(item => item.category))]

function Portfoliopage() {
    const [menuItem, setMenuItem] = useState(projects);
    const [button, setButton] = useState(allButtons);

    const filter = (button) => {
        if(button === 'All') {
            setMenuItem(projects);
            return;
        }

        const filteredData = projects.filter(item => item.category === button);
        setMenuItem(filteredData);
    };

    return (
        <MainLayout>
            <Titles title={'Projects'} span={'Projects'}/>
            <InnerLayout>
                <Buttonproject filter={filter} button={button}/>
                <Menu menuItem={menuItem}/>
            </InnerLayout>
        </MainLayout>
    )
}

const PortfolioStyled = styled.section `
`;

export default Portfoliopage

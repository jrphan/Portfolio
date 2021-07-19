import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Titles from '../components/Titles';

function Contactpage() {
    return (
        <MainLayout>
           <ContactStyled>
               <Titles title={"Contact"} span={"Contact"}/>
               <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <form className="form">
                            <div className="form-group">
                                <label htmlFor="name">Enter your name:</label>
                                <input type="text" id="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Enter your email:</label>
                                <input type="email" id="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Enter your subject:</label>
                                <input type="text" id="subject"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Enter your email:</label>
                                
                            </div>
                        </form>
                    </div>
               </InnerLayout>
           </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.section `

`;

export default Contactpage

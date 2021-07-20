import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Titles from '../components/Titles';
import Button from '../components/Button';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'; 
import ContactItem from '../components/ContactItem';

function Contactpage() {
    return (
        <MainLayout>
           <ContactStyled>
               <Titles title={"Contact"} span={"Contact"}/>
               <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <form className="form">
                            <div className="form-group">
                                <input type="text" id="name" placeholder=" "/>
                                <label htmlFor="name">Enter your name:</label>
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" placeholder=" "/>
                                <label htmlFor="email">Enter your email:</label>
                            </div>
                            <div className="form-group">
                                <input type="text" id="subject" placeholder=" "/>
                                <label htmlFor="subject">Enter your subject:</label>
                            </div>
                            <div className="form-group">
                                <textarea id="text-area" name="textarea" cols="30" rows="5" placeholder=" "></textarea>
                                <label htmlFor="text-area">Enter your Message:</label>
                            </div>
                            <div className="form-group btn">
                               <Button title={"Send Email"}/>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem 
                            icon={<PhoneOutlinedIcon/>} 
                            title={'Phone:'} 
                            contact={'+84 0399 638 299'}
                            href={'tel:0399638299'}
                        />
                         <ContactItem 
                            icon={<MailOutlineOutlinedIcon/>} 
                            title={'Mail:'} 
                            contact={'phanduytam0306.ltp@gmail.com'}
                            href={'mailto:phanduytam0306.ltp@gmail.com'}
                        />
                        <ContactItem 
                            icon={<LocationOnOutlinedIcon/>} 
                            title={'Location:'} 
                            contact={'Viet Nam'}
                        />
                    </div>
               </InnerLayout>
           </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.section `
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .form {
            width: 100%;

            .btn {
                margin-top: 0.8rem;
            }

            &-group {
                margin-top: 1.5rem;
                position: relative;
                width: 100%;

                a {
                    padding: 10px 15px;
                    margin: 0;
                }

                label {
                    position: absolute;
                    padding: 0 5px;
                    border-radius: 5px;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 20px;
                  
                    user-select: none;
                    transition: all .3s ease;
                    opacity: 0.5;
                }

                input {
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    color: var(--white-color);
                    height: 50px;
                    padding: 5px 15px;
                    width: 100%;
                    border-radius: 15px;

                    &:focus {
                        border: 1px solid var(--primary-color);
                    }

                    &:not(:placeholder-shown) + label, &:focus + label {
                        left: 20px;
                        top: -12px;
                        display: inline-block;
                        background-color: var(--background-dark-color);
                        transform: none;
                        transition: all .3s ease;
                        opacity: 1;
                        color: var(--white-color);
                    }
                }

                textarea {
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    color: var(--white-color);
                    padding: 15px;
                    border-radius: 15px;
                    width: 100%;
                    resize: none;
                    &:focus {
                        border: 1px solid var(--primary-color);
                    }

                    &:not(:placeholder-shown) + label, &:focus + label {
                        left: 20px;
                        top: -12px;
                        display: inline-block;
                        background-color: var(--background-dark-color);
                        transform: none;
                        transition: all .3s ease;
                        opacity: 1;
                        color: var(--white-color);
                    }
                }
            }
        }

        .right-content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 3rem;
        }
    }
`;

export default Contactpage

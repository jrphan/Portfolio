import React, { useState, useEffect } from 'react'
import { InnerLayout, MainLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Titles from '../components/Titles';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'; 
import ContactItem from '../components/ContactItem';
import emailjs from 'emailjs-com';
// import MapContainer from '../components/MapContainer';
import Aos from 'aos';
import "aos/dist/aos.css";


function Contactpage() {
    const [valueName, setValueName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valueSub, setValueSub] = useState('');
    const [valueMessage, setValueMessage] = useState('');

    useEffect(() => {
        Aos.init({duration: 1000});
    },[])

    function handleValueChangeName(e) {
        setValueName(e.target.value);
    }

    function handleValueChangeEmail(e) {
        setValueEmail(e.target.value);
    }

    function handleValueChangeSub(e) {
        setValueSub(e.target.value);
    }

    function handleValueChangeMess(e) {
        setValueMessage(e.target.value);   
    }

    function sendEmail(e) {
        e.preventDefault();

        if(valueName === '') {
            alert('Vui lòng nhập Tên!!!');
        } else if (valueEmail === '') {
            alert('Vui lòng nhập Email!!!')
        } else if (valueSub === '') {
            alert ('Vui lòng nhập chủ đề!!!')
        } else if (valueMessage === '') {
            alert('Vui lòng nhập Message!!!');
        } else {
            emailjs.sendForm('service_xsyn7r6', 'template_7cqyps9', e.target, 'user_FPGFd5W4bQeLHmKJE84Y2')
              .then(res => {
                  alert('successfully!!!');
                  setValueName('');
                  setValueEmail('');
                  setValueSub('');
                  setValueMessage('');
              }).catch(err => {
                  console.log(err);
              });
        }
    
    }

    return (
        <MainLayout>
           <ContactStyled>
               <Titles title={"Contact"} span={"Contact"}/>
               <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <form className="form" onSubmit={sendEmail}>
                            <div className="form-group" data-aos="fade-up">
                                <input type="text" id="name" placeholder=" " name="name" value={valueName} onChange={handleValueChangeName}/>
                                <label htmlFor="name">Enter your name:</label>
                            </div>
                            <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                                <input type="email" id="email" placeholder=" " name="email" value={valueEmail} onChange={handleValueChangeEmail}/>
                                <label htmlFor="email">Enter your email:</label>
                            </div>
                            <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                                <input type="text" id="subject" placeholder=" " name="subject" value={valueSub} onChange={handleValueChangeSub}/>
                                <label htmlFor="subject">Enter your subject:</label>
                            </div>
                            <div className="form-group" data-aos="fade-up" data-aos-delay="400">
                                <textarea id="text-area" name="message" cols="30" rows="5" placeholder=" " value={valueMessage} onChange={handleValueChangeMess}></textarea>
                                <label htmlFor="text-area">Enter your Message:</label>
                            </div>
                            <div className="form-group btn" data-aos="fade-up" data-aos-delay="500" >
                               <input type='submit' value="Send Email" className="btn-send"/>
                            </div>
                        </form>
                    </div>
                    <div className="right-content" data-aos="fade-up">
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
                    {/* <MapContainer/> */}
               </InnerLayout>
           </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.section `
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 576px) {
            grid-template-columns: repeat(1, 1fr);
        }

        .form {
            width: 100%;
            

            .btn {
                margin-top: 0.8rem;

                &-send {
                    padding: 10px 15px;
                    margin: 0;
    
                    display: inline-block;
                    font-size: inherit;
                    text-transform: uppercase;

                    color: var(--white-color);
                    transition: all 0.5s ease;

                    cursor: pointer;
                    border-radius: 10px;
                    border: 1px solid var(--primary-color);
                    width: initial;

                    &:hover {
                        background-color: var(--primary-color);
                        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
                        border-radius: 15px;
                    }
                }
            }

            &-group {
                margin-top: 1.5rem;
                position: relative;
                width: 100%;


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
            @media screen and (max-width: 576px) {
                margin-left: 0;
                margin-top: 2rem;
            }
        }
    }
`;

export default Contactpage

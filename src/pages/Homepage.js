import React from 'react';
import styled from 'styled-components';
import Particle from '../components/Particle';
import { Facebook } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';



function Homepage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle/>
            </div>
            <div className="typography">
                <h1>Hi I'm <span> <span>P</span><span>h</span><span>a</span><span>n</span> <span>D</span><span>u</span><span>y</span> <span>T</span><span>â</span><span>m</span> </span></h1>
                <p>
                    fkjdkfjsfsnsdfsnf djfsaf djsdf sdfjsddf sdkfj sfj fsdfjsdfjsđfkjsdfđajasdk
                    ạdhasaj jdsafafajfjđfs dfjsđfjksdjffss fsdfjsdjfksflksjf sfj sdfskdljdfsdjdfjs facebookdflks
                    fskjfsjkfsdkljfsdkjf kdkfsdkjfsdkljfsd dsjfsdlf sdjdf sdlfsdj fsdjf sdf sdf dkjfsda
                </p>
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
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header `
    width: 100%;
    height: 100vh;
    position: relative;

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        text-align: center;
        width: 80%;

        h1 {
            span {
                span {
                    transition: all .2s;
                    &:hover {
                        transition: all .2s;
                        color: #fff;
                    }
                }
            }
        }

        p {
            letter-spacing: 1px;
            line-height: 25px;
        }

        .icons {
            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
            
            
            .icon {
                padding: 10px;
                margin: 10px;

                border: 1px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                
                &:hover {
                    cursor: pointer;
                    color: var(--primary-color);
                    border: 1px solid var(--primary-color);
                    transition: all 0.5s ease;
                }
            }
        }
    }

`;

export default Homepage

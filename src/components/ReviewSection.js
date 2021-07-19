import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ReviewItem from './ReviewItem';
import Titles from './Titles';

function ReviewSection() {
    return (
        <ReviewSectionStyled>
            <Titles title={'My Hobby'} span={'My Hobby'}/>
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={'hello'}/>
                    <ReviewItem text={'hello 2'}/>
                    <ReviewItem text={'hello 2'}/>
                    <ReviewItem text={'hello 2'}/>
                </div>
            </InnerLayout>
        </ReviewSectionStyled>
        
    )
}

const ReviewSectionStyled = styled.section `
    margin-top: 2rem;
    .reviews {
        display: flex;
        flex-wrap: wrap;
    }
`;

export default ReviewSection

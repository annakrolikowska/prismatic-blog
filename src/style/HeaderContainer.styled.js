import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    border-bottom: 1px dashed #B4DD7F;

    @media (max-width: 1025px) {
        .blog-title {
            margin-left: 30px;
        }
    } 

    @media (max-width: 749px) {
        display: block;
        text-align: center;
        
        .blog-title {
            margin-left: 0px;
            font-size: 3rem;
        }
    }

`

export default StyledHeaderContainer;
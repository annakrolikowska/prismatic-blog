import styled from 'styled-components';

const StyledImage = styled.img`

   border-radius: 20px; 
   width: 40%;

    &.post_img {
       margin-left: 15px;
     
    }

    &.logo {
        width: 80px;
        height: 80px; 
        border-radius: none;
    }

    &.category__img {
        width: 175px;
        height: 170px; 
        align-items: center;
    }

    @media (max-width: 749px) {

        width: 85%;

        &.category__img {
            width: 300px;
            height: 300px; 
        }

        &.logo--mobile {
            width: 75px;
            height: 75px;
            margin-left: 20px;
            margin-top: 10px;
        }

        &.logo--desktop {
            display: none;
        }
    }
`

export default StyledImage;
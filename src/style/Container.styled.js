import styled from 'styled-components';

const StyledContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   margin-top: 30px;

   &.category_container {
      width: 800px;
      padding-bottom: 10vh; 
      margin-left: 50px;
      margin-top: 50px;
   }

   @media (max-width: 1025px) {
      &.category_container {
         width: 600px;
      }
   } 

   @media (max-width: 749px) {

      &.category_container {
         flex-direction:column;
         align-items: center;
      }
   } 
`

export default StyledContainer;
import styled from 'styled-components';

const StyledPostContainer = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;

    p {
      text-align: justify;
    }

    &.single_post {
        text-align: center;
        width: 800px;
        margin-top: 5px;
    }

    &.category_posts {
        width: 400px;
        padding: 15px;
        flex-direction: column;
        text-align: center;
        box-shadow: 8px 8px 18px 0 rgba(0, 0, 0, 0.2),
          -8px -8px 18px 0 rgba(255, 255, 255, 0.5); 
        border-radius: 20px;

          &:hover {
            cursor: pointer;
            box-shadow: inset 3px 3px 5px 0 rgba(0, 0, 0, 0.2),
            inset -3px -3px 5px 0 rgba(255, 255, 255, 0.5); 
            transition: 0.2s;
            }
    }


    @media (max-width: 749px) {
      display: block;
      width: 90%;
        margin: 0 auto;
        font-size: 1.4rem;
        margin-top: 70px;

    
        & h2 {
          font-size: 1.8rem;
        }

        &.category_posts {
          width: 95%;
          margin-top: 30px;
      }

      &.single_post {
        width: 90%;
    }
    } 

    @media (max-width: 549px) {
        font-size: 1.8rem;

        & h2 {
          font-size: 2rem;
        }
    } 

        
`

export default StyledPostContainer;
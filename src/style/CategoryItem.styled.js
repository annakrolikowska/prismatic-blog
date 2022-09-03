import styled from 'styled-components';

const StyledCategoryItem = styled.div`
    height: 200px;
    width: 200px;
    text-align: center;
    padding: 10px;
    margin-bottom: 30px;
    flex-direction: column;
    border-radius: 20px;
    opacity: 80%;
    box-shadow: 8px 8px 18px 0 rgba(0, 0, 0, 0.2),
          -8px -8px 18px 0 rgba(255, 255, 255, 0.5); 

      &:hover {
        cursor: pointer;
        opacity: 95%;
        box-shadow: inset 3px 3px 5px 0 rgba(0, 0, 0, 0.2),
        inset -3px -3px 5px 0 rgba(255, 255, 255, 0.5); 
        transition: 0.2s;
        }

  & a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        text-transform: uppercase;

        &:active {
          color: #B4DD7F;
          transition: 0.1s;
        }
    }  

  @media (max-width: 749px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 340px;
    width: 340px;
    padding: 20px;

    & a {
      font-size: 1.8rem;
    }  
  } 
`

export default StyledCategoryItem;
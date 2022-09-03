import styled from 'styled-components';

const StyledNav = styled.nav`

    &.nav--mobile {
        display: none;
    }

    & ul {
        display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            margin: 30px;
            margin-right: 200px;
            list-style: none;   
    }

    & li {
        margin-right: 20px;
        margin-bottom: 10px;

        &:hover {
            color: #B4DD7F;
        }

        & a {
            text-decoration: none;
            color: black;
            font-weight: bold;
            text-transform: uppercase;
            padding-bottom: 4px;;

            &:hover {
                color: #B4DD7F;
                transition: 0.1s;
            }

            &:active {
                border-bottom: 2px solid #B4DD7F;
            }
        }  
    }

    @media (max-width: 1025px) {
        display:flex;
        width: 200px;
    } 

    @media (max-width: 749px) {

        &.nav--desktop {
        display: none;
        }

        &.nav--mobile {
        display: flex;
        width: 749px;
        background-color: #B4DD7F;
        margin: 0;
        position: fixed;
        justify-content: space-between;
        top: -4px;
        font-size: 1.8rem;
        padding-top: 15px;;
        }   
        
        & li {
            margin-right: 50px;
            margin-bottom: 0px; 

            & a {

                &:hover {
                    color: black;
                    opacity: 90%;
                }
            }  
        }
}

`

export default StyledNav;
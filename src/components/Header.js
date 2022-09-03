import {PrismicText, useSinglePrismicDocument} from "@prismicio/react";
import {Link} from "react-router-dom";
import StyledNav from "../style/Nav.styled";
import StyledHeaderContainer from "../style/HeaderContainer.styled";
import StyledImage from "../style/Image.styled";



export const Header = () =>{
    const [document] = useSinglePrismicDocument('header')

    return (
    <StyledHeaderContainer >
            <StyledNav className='nav--mobile'>
            <Link to={"/"}> <StyledImage className='logo logo--mobile' src='https://cdn-icons-png.flaticon.com/512/1460/1460179.png' alt='logo'/></Link>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/category"}>Kategorie</Link></li>
                </ul>
            </StyledNav>
       <Link to={"/"}> <StyledImage className='logo logo--desktop' src='https://cdn-icons-png.flaticon.com/512/1460/1460179.png' alt='logo'/></Link>
        {document && (
            <h1 className="blog-title title--dektop">
                <PrismicText field={document.data.name} />
            </h1> ) }
            <StyledNav className='nav--desktop'>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/category"}>Kategorie</Link></li>
                </ul>
            </StyledNav>
    </StyledHeaderContainer>
);}

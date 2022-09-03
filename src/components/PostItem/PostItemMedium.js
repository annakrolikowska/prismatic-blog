import {PrismicText} from "@prismicio/react";
import StyledPostContainer from "../../style/PostContainer.styled";
import StyledImage from "../../style/Image.styled";
import { Link } from "react-router-dom";

export const PostItemMedium = ({document}) => {

    const {data} = document

    return (
        <StyledPostContainer >
            <div>
                <p>data: {data.post_date}</p>
                <Link to={'/post/'.concat(document.uid)}>
                    <h2><PrismicText field={data.post_title}/></h2>
                </Link>
                <p>  <PrismicText field={data.post_text}/></p>
                <Link to={'/post/'.concat(document.uid)}>
                    <p>Więcej...</p>
                </Link>
            </div>
            <StyledImage className='post_img' alt={data.post_image.alt} src={data.post_image.url}/>
        </StyledPostContainer>
    );                  
}
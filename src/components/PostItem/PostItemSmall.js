import {PrismicText} from "@prismicio/react";
import StyledPostContainer from "../../style/PostContainer.styled";
import StyledImage from "../../style/Image.styled";
import { Link } from "react-router-dom";

export const PostItemSmall = ({document}) => {

    const {data} = document

    return (
        <StyledPostContainer className='category_posts'>
            <Link to={'/post/'.concat(document.uid)}>
                <div>
                    <p>data: {data.post_date}</p>
                    <h3><PrismicText field={data.post_title}/></h3>
                    <StyledImage className='category-post_img' alt={data.post_image.alt}  src={data.post_image.url}/>
                    <p>  <PrismicText field={data.post_description}/></p>
                </div>
            </Link>
        </StyledPostContainer>
    );                 
}


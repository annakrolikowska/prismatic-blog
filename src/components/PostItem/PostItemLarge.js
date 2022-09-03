import {PrismicText} from "@prismicio/react";
import StyledPostContainer from "../../style/PostContainer.styled";
import StyledImage from "../../style/Image.styled";

export const PostItemLarge = ({documentData}) => {
    
    return (
        <StyledPostContainer className='single_post'>
        <div>
            <p>data: {documentData.post_date}</p>
            <h2><PrismicText field={documentData.post_title}/></h2>
            <p>  <PrismicText field={documentData.post_description}/></p>
            <StyledImage className='post_img'  alt={documentData.post_image.alt} src={documentData.post_image.url}/>
            <p>  <PrismicText field={documentData.post_text}/></p>
        </div>
        </StyledPostContainer>
    );                  
}

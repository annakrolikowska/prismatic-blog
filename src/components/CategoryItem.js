import {PrismicText} from "@prismicio/react";
import {Link} from "react-router-dom";
import StyledCategoryItem from "../style/CategoryItem.styled";
import StyledImage from "../style/Image.styled";

export const CategoryItem = ({document}) =>{

    const {data} = document

    return (
        <StyledCategoryItem>
            <Link to={'/category/'.concat(document.uid)}>
                <PrismicText field={data.category_title}/>
                <StyledImage className='category__img' alt={data.category_image.alt}  src={data.category_image.url}></StyledImage>
            </Link>
        </StyledCategoryItem>
    )

}

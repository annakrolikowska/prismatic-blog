import {useAllPrismicDocumentsByType} from "@prismicio/react";
import StyledContainer from "../style/Container.styled";
import { CategoryItem } from "./CategoryItem";


export const Category = () =>{
    const [documents] = useAllPrismicDocumentsByType('category')

    return (
        <StyledContainer className='category_container'>
            {documents && (
                documents.map((document,index) => 
                <CategoryItem document={document} key={index}/>
                    )
                )
            }
        </StyledContainer>
    );
}

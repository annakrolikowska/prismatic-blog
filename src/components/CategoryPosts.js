import { useAllPrismicDocumentsByType} from "@prismicio/react";
import {useParams} from "react-router-dom";
import StyledContainer from "../style/Container.styled";
import { PostItemSmall } from "./PostItem/PostItemSmall";


export const CategoryPosts = () =>{
    const { uid } = useParams();
    const [documents] = useAllPrismicDocumentsByType('post')

    return (
        <StyledContainer className='category_post'>
            {documents && (
                documents.filter((document) =>  
                document.data.post_categories.map((n) =>{ return n.post_category.uid}).includes(uid)).map((document,index) => 
                <PostItemSmall document={document} key={index}/>
                )
            )}
        </StyledContainer>
    );

}

import {usePrismicDocumentByUID} from "@prismicio/react";
import {useParams} from "react-router-dom";
import StyledContainer from "../style/Container.styled";
import { PostItemLarge } from "./PostItem/PostItemLarge";


export const Post = () =>{
    const { id } = useParams();
    const [document] = usePrismicDocumentByUID("post", id);

    return (
        <StyledContainer >
            {document && (
                <PostItemLarge documentData={document.data}/>
                )
            }
        </StyledContainer>
    );
}

import {useAllPrismicDocumentsByType} from "@prismicio/react";
import { PostItemMedium } from "./PostItem/PostItemMedium";
import Pagination from "./Pagination";


export const Home = () => {
    const [documents] = useAllPrismicDocumentsByType('post')

    return (
        <div>
            {documents && (   <Pagination path='home/' limit={5} lenght={documents.length}>
                {documents && (
                    documents.map((document,index) => 
                        <PostItemMedium document={document} key={index}/>
                    ))
                }
                </Pagination>
            )}
        </div>
    );
}

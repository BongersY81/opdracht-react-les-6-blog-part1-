import {useParams} from 'react-router-dom';

function BlogPostPagina  ()  {
    const {id} = useParams();
    return (
        <div>
            <h1>Het blogpostnummer is {id}</h1>
        </div>
    );
}

export default BlogPostPagina;
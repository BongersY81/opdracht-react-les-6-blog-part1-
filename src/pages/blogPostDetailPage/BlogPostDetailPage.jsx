import {useParams} from 'react-router-dom';


function BlogPostDetailPage  ()  {
    const {id} = useParams();
    return <div>Blogpost ID: {id}</div>
}


export default BlogPostDetailPage;
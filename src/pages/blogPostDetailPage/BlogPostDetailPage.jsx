
import posts from '../../constants/data.json';
import formatDateToDutch from '../../assets/helpers/formatDateToDutch.js';
import {Link} from "react-router-dom";

import './BlogPostDetailPage.css';


function BlogPostDetailPage() {
    return (
        <div>
            <header>


            </header>
            {posts.length > 0 &&
                posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title} {post.readTime}</h2>
                        <p>{post.subtitle}</p>
                        <p>{"geschreven door"} {post.author} {"op"} {formatDateToDutch(post.created)}</p>
                        <p>{post.content}</p>
                        <p>{post.comments} {"reacties"} - {post.shares} {"keer gedeeld"}</p>
                    </div>

                ))}
            <p> Terug naar de <Link to="/overview-page"> overzichtspagina </Link></p>
        </div>
    )
}


export default BlogPostDetailPage;
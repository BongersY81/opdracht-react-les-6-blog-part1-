import posts from '../../constants/data.json';
import formatDateToDutch from '../../assets/helpers/formatDateToDutch.js';
import {Link} from "react-router-dom";
import './BlogPostDetailPage.css';


function BlogPostDetailPage() {
    return (
        <div>
            {posts.length > 0 &&
                posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title} </h2>
                        <p>{post.subtitle}</p>
                        <h3>{"geschreven door"} {post.author} {"op"} {formatDateToDutch(post.created)}</h3>
                        <h5>🕰️ {post.readTime} {"minuten lezen"} </h5>
                        <p>{post.content}</p>
                        <p className="reviews">{post.comments} {"reacties"} - {post.shares} {"keer gedeeld"}</p>

                    </div>

                ))}

            <div className="back-to-overview">
                <p> Terug naar de <Link to="/overview-page">overzichtspagina</Link></p>
            </div>


            <footer className="footer-blogventure">
                Blogventure ©️ 2023 - ontwikkeld voor NOVI-Hogeschool
            </footer>
        </div>
    )
}


export default BlogPostDetailPage;
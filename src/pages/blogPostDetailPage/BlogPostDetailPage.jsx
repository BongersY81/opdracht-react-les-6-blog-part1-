
import formatDateToDutch from '../../assets/helpers/formatDateToDutch.js';
import {Link} from "react-router-dom";
import axios from "axios";
import './BlogPostDetailPage.css';
import {useEffect, useState} from "react";


function BlogPostDetailPage() {

    const [Post, setPost] = useState({})
    const [error, toggleError] = useState(false)

    async function Blogpost() {

        try {
            const result = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/6', {
                headers: {
                    Accept: '*/*',
                    'novi-education-project-id': 'cef3eb7c-19dd-4b51-b681-43e26cc8a99d',
                }
            });
            console.log(result.data);
            setPost(result.data)
            toggleError(false)
        } catch (error) {
            console.error(error);
            toggleError(true)

        } finally {
            console.log()

        }
    }

    useEffect(() => {
        void Blogpost();
    },[]);

    return (
        <div>
            <button type="button" onClick={Blogpost}>Haal gekozen blogpost ID op</button>
            {Post.length > 0 &&
                Post.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title} </h2>
                        <p>{post.subtitle}</p>
                        <h3>{"geschreven door"} {post.author} {"op"} {formatDateToDutch(post.created)}</h3>
                        <h5>🕰️ {post.readTime} {"minuten lezen"} </h5>
                        <p>{post.content}</p>
                        <p className="reviews">{post.comments} {"reacties"} - {post.shares} {"keer gedeeld"}</p>

                    </div>

                ))}
            {error && <p className="error-message">Er is iets misgegaan. Probeer het nog eens opnieuw</p>}

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
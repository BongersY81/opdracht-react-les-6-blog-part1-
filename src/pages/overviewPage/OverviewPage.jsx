import './OverviewPage.css'
import axios from 'axios'
import {useEffect} from "react";
import {useState} from "react";

function OverviewPage() {
    const [Posts, setPosts] = useState([])
    const [error, toggleError] = useState(false)

    async function blogPosts() {

        try {
            const result = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    Accept: '*/*',
                    'novi-education-project-id': 'cef3eb7c-19dd-4b51-b681-43e26cc8a99d',
                }
            });
            console.log(result.data);
            setPosts(result.data);
            toggleError(false)
        } catch (error) {
            console.error(error);
            toggleError(true)


        }
    }

    useEffect(() => {
        void blogPosts();
    }, []);


    return (

        <div className="overview-blogpost">

            <button type="button" onClick={blogPosts}>Haal de blogposts op</button>

            <h1>Bekijk alle 17 posts op het platform</h1>

            {Posts.length > 0 &&
                Posts.map((post, index) => (
                    <div key={index}>
                        <div className="blogpost"></div>
                        <h2>{post.title} ({post.author})</h2>
                        <p>{post?.comments} reacties - {post?.shares} keer gedeeld</p>
                    </div>
                ))}

            {error && <p className="error-message">Er is iets misgegaan. Probeer het nog eens opnieuw</p>}
        </div>

    )
}

export default OverviewPage;
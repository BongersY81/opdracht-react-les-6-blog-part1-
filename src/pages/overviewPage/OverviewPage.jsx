import posts from '../../constants/data.json'
import './OverviewPage.css'
import axios from 'axios'
import {useEffect} from "react";
import {useState} from "react";

function OverviewPage() {
    const [Posts,setPosts] = useState([])

    async function blogPosts() {

        try {
            const result = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    Accept: '*/*',
                    'novi-education-project-id': 'cef3eb7c-19dd-4b51-b681-43e26cc8a99d',
                }
            });
            console.log(result.data);
        } catch (error) {
            console.error(error);
        } finally {
            console.log()

        }
    }
    useEffect(() => {
        void blogPosts();
        },[]);



    return (

        <div className="overview-blogpost">
            <h1>Bekijk alle 17 posts op het platform</h1>
            {posts.length > 0 &&
            posts.map((post, index) => (
                <div key={index}>
                    <div className="blogpost"></div>
                    <h2>{post.title} ({post.author})</h2>
                    <p>{post?.comments} reacties - {post?.shares} keer gedeeld</p>
                </div>
            ))}

            <button type="button" onClick={blogPosts} >Haal de blogposts op</button>
        </div>

    )
}

export default OverviewPage;
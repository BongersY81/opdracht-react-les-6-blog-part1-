import {useState} from "react";
import './BlogPosts.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import getReadTime from "../../assets/helpers/getReadTime.js";


function BlogPosts() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [author, setAuthor] = useState("");
    const [messageField, setMessageField] = useState("");
    const navigate = useNavigate();

    // opdracht 3.2 en 3.3//

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const result = await axios.post("https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts",
                {
                    title: title,
                    subtitle: subtitle,
                    author: author,
                    content: messageField,
                    created: new Date().toISOString(),
                    readTime: getReadTime(messageField),
                    comments: 0,
                    shares: 0,
                },
                {
                    headers: {
                        Accept: '*/*',
                        'novi-education-project-id': 'cef3eb7c-19dd-4b51-b681-43e26cc8a99d',
                        'Content-Type': 'application/json',
                    }
                });
            console.log(result.data);
            navigate("/overview-page");
        } catch (error) {
            console.error("sorry er gaat iet mis");

        }
    }


    return (
        <div>
            <div className="container">
                <h1>Post toevoegen</h1>


                <form onSubmit={handleSubmit} className="blog-post-form">


                    <label htmlFor="form-title">
                        <p>Titel</p>
                        <input
                            type="text"
                            id="form-title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>

                    <label htmlFor="form-subtitle">
                        <p>Subtitle</p>
                        <input
                            type="text"
                            id="form-subtitle"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                        />
                    </label>

                    <label htmlFor="form-author">
                        <p>Naam en achternaam</p>
                        <input
                            type="text"
                            id="form-author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </label>

                    <label htmlFor="form-message-field">
                        <p>Bericht</p>
                        <textarea
                            id="form-message-field"
                            value={messageField}
                            onChange={(e) => setMessageField(e.target.value)}
                            // minLength={300}
                            // maxLength={2000}
                        />
                    </label>


                    <div className="button">

                        <button type="submit">Toevoegen</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default BlogPosts;






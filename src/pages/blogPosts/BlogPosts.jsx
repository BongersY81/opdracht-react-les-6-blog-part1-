import {useState} from "react";
import './BlogPosts.css';
import {useNavigate} from "react-router-dom";
import logo from "../../assets/logo-medium.png";

function BlogPosts() {

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [author, setAuthor] = useState("");
    const [messageField, setMessageField] = useState("");

// opdracht 3.2//
    const d = new Date(0)
    console.log(d.toISOString());

    console.log(`
 title:${title}
 subtitle:${subtitle}
 author:${author}
 messageField:${messageField}
 created:
 readTime:
 comments:
 shares:`
    )


    // const handleSubmit = (e) => {
    //     e.preventieDefault();
    //     if (messageField.length < 300) {
    //         alert("");
    //     }
    //     if (messageField.length > 2000) {
    //         alert("");
    //
    //     }
    // }


//opdracht 3.3//
    function BlogPost() {
        const navigate= useNavigate();

        function onFormSubmit(e) {
            e.preventDefault();
            navigate('/overview-page');
        }
    }
    return (
        <div>


        <div className="container">
            <h1>Post toevoegen</h1>


            <form className="blog-post-form">

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
                        maxLength={2000}
                    />
                </label>


            </form>
            <div className="button"></div>

            <button onClick>Toevoegen</button>
        </div>
        </div>
    )


}


export default BlogPosts;
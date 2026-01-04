import posts from '../../constants/data.json'
import './OverviewPage.css'

function OverviewPage() {

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
        </div>

    )
}

export default OverviewPage;
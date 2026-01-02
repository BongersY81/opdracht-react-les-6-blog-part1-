import posts from '../../constants/data.json'
function OverviewPage() {

    return (
        <div>
            {posts.length > 0 &&
            posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title} {post.author}</h2>
                    <p>{post?.comments} reacties - {post?.shares} keer gedeeld</p>
                </div>
            ))}
        </div>
    )
}

export default OverviewPage;
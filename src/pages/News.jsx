import PageTransition from "../components/PageTransition.jsx"
import BlogPost from "../components/BlogPost.jsx"

const News = ({ posts }) => {
    return (
        <>
            <div
                className="bg-lila-900 p-8 lg:p-20 w-screen min-h-svh"
                id="news"
            >
                <div className="flex lg:flex-row flex-col flex-wrap lg:justify-between gap-5 lg:gap-0 ">
                    {posts.map((post) => (
                        <BlogPost
                            key={post.id}
                            title={post.title.rendered}
                            slug={post.slug}
                            excerpt={post.excerpt.rendered}
                            img={post.fimg_url}
                        />
                    ))}
                </div>
            </div>
            <PageTransition />
        </>
    )
}

export default News

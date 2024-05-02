import PageTransition from "../components/PageTransition.jsx"
import BlogPost from "../components/BlogPost.jsx"

const News = ({ posts }) => {
    document.title = "News - ITGALL"
    return (
        <>
            <div
                className="bg-lila-900 p-8 lg:p-20 w-screen min-h-svh"
                id="news"
            >
                <div className="flex flex-col flex-wrap gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:auto-cols-max">
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

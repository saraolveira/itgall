import PageTransition from "../components/PageTransition.jsx"
import BlogPost from "../components/BlogPost.jsx"

const News = ({ posts }) => {
    return (
        <>
            <div className="w-screen h-svh bg-lila-900 p-8  lg:p-20" id="news">
                <div className="flex flex-col flex-wrap gap-5 lg:gap-0 lg:flex-row lg:justify-between ">
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

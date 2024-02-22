import BlogPost from "./BlogPost.jsx"
const Blog = ({ posts }) => {
    const lastPosts = posts.slice(0, 4)
    return (
        <div className="w-screen bg-lila-900 p-8  lg:p-20">
            <h2 className="text-5xl font-extrabold text-amarillo mb-8">News</h2>
            <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between ">
                {lastPosts.map((post) => (
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
    )
}

export default Blog

import { Link } from "react-router-dom"
import BlogPost from "./BlogPost.jsx"

const Blog = ({ posts }) => {
    const lastPosts = posts.slice(0, 4)
    return (
        <div
            className="flex flex-col gap-8 bg-lila-400 p-8 lg:p-20 w-screen"
            id="news"
        >
            <h2 className="font-extrabold text-5xl text-amarillo">
                ITGALL News
            </h2>
            <div className="flex flex-col gap-5 lg:gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:auto-cols-max">
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
            <Link to="/blog" className="self-end">
                <div className="flex justify-center items-center bg-amarillo hover:bg-lila-100 px-8 py-2 rounded-3xl w-fit transition duration-300 cursor-pointer group">
                    <p className="group-hover:text-amarillo font-extrabold text-lila-900 text-xl uppercase transition duration-300">
                        All news
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Blog

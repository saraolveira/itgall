import { Link } from "react-router-dom"
import BlogPost from "./BlogPost.jsx"

const Blog = ({ posts }) => {
    const lastPosts = posts.slice(0, 4)
    return (
        <div
            className="w-screen bg-lila-900 p-8  lg:p-20 flex flex-col gap-8"
            id="news"
        >
            <h2 className="text-5xl font-extrabold text-amarillo">News</h2>
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
            <Link to="/blog" className="self-end">
                <div className="w-fit py-2 px-8 bg-amarillo cursor-pointer  rounded-3xl flex justify-center items-center group hover:bg-lila-100 transition duration-300">
                    <p className="text-lila-900 font-extrabold text-xl uppercase group-hover:text-amarillo transition duration-300">
                        todas las noticias
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Blog

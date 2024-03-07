import { Link } from "react-router-dom"
const BlogPost = ({ title, slug, excerpt, img }) => {
    return (
        <Link to={`/posts/${slug}`}>
            <div className="relative bg-white drop-shadow-md p-8 rounded-3xl w-full h-full transition-all duration-300 hover:cursor-pointer basis-0 group">
                <img
                    src={img ? img : undefined}
                    className="group-hover:grayscale top-0 left-0 absolute rounded-t-3xl w-full h-40 transition duration-300 object-cover"
                />

                <h2 className="group-hover:text-lila-400 mt-36 font-extrabold text-lila-900 text-xl transition duration-300">
                    {title}
                </h2>
                <div
                    className="group-hover:text-lila-900 mt-4 text-sm transition-all duration-300"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                />
            </div>
        </Link>
    )
}

export default BlogPost

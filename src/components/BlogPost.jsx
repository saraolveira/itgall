import { Link } from "react-router-dom"
const BlogPost = ({ title, slug, excerpt, img }) => {
    return (
        <Link to={`/posts/${slug}`}>
            <div className="w-full lg:w-96 h-[32rem] bg-white p-8 rounded-3xl drop-shadow-md hover:cursor-pointer group relative">
                <img
                    src={img ? img : undefined}
                    className="object-cover	w-full lg:w-96 h-40 rounded-t-3xl absolute top-0 left-0 group-hover:grayscale transition duration-300"
                />

                <h2 className="mt-36 font-extrabold text-xl text-lila-900 group-hover:text-lila-400 transition duration-300">
                    {title}
                </h2>
                <div
                    className="mt-4 text-sm "
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                />
            </div>
        </Link>
    )
}

export default BlogPost

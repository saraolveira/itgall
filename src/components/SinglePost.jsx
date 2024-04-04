import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PageTransition from "./PageTransition"

const SinglePost = ({ posts }) => {
    const { id } = useParams()
    const [post, setPost] = useState()

    const choosePost = async () => {
        const postFinal = posts.filter((post) => post.slug === id)
        setPost(postFinal[0])
    }

    useEffect(() => {
        choosePost()
    })

    if (!post)
        return (
            <div className="bg-lila-900 w-screen min-h-svh">
                <PageTransition />
            </div>
        )

    return (
        <div className="bg-lila-900 p-8 lg:p-20 w-screen min-h-svh">
            <h2 className="font-extrabold text-4xl text-slate-100">
                {post.title.rendered}
            </h2>
            <div
                className="bg-slate-50 mt-8 p-8 rounded-3xl rendered-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <PageTransition />
        </div>
    )
}
export default SinglePost

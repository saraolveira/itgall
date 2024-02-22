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
            <div className="w-screen min-h-svh bg-lila-900">
                <PageTransition />
            </div>
        )

    return (
        <div className="w-screen min-h-svh bg-lila-900 p-8 lg:p-20">
            <h2 className="text-slate-100 text-4xl font-extrabold">
                {post.title.rendered}
            </h2>
            <div
                className="bg-slate-50 p-8 mt-8 rounded-3xl"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <PageTransition />
        </div>
    )
}
export default SinglePost

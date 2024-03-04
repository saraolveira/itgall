import PageTransition from "../components/PageTransition.jsx"

const BePart = () => {
    return (
        <div className="bg-lila-900 p-8 lg:p-20 w-full min-h-[calc(100svh-5rem)]">
            <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                Be part of the ITGALL Network
            </h2>
            <p className="mb-8 font-semibold text-slate-50 text-xl">*texto*</p>
            <PageTransition />
            <div>
                <form className="flex flex-col gap-4">
                    <label>
                        <p className="text-lg text-slate-50">Entity name</p>
                        <input
                            type="text"
                            name="entityName"
                            className="p-1 w-1/4"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-amarillo hover:bg-lila-400 px-4 py-2 rounded-3xl w-1/4 font-bold text-base text-lila-900 lg:text-2xl hover:text-amarillo transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BePart

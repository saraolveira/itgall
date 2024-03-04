import PageTransition from "../components/PageTransition.jsx"

const TestITGALL = () => {
    return (
        <div className="bg-lila-900 p-8 lg:p-20 w-full min-h-[calc(100svh-5rem)]">
            <h2 className="mb-8 font-extrabold text-5xl text-amarillo">
                Test with ITGALL
            </h2>
            <p className="mb-8 font-semibold text-slate-50 text-xl">
                Do you want ITGALL to help in the real process of co-creation
                from beginning to end? Do you need help to define your market
                scaling mission? Complete the following form to test with ITGALL
                and we'll contact you!
            </p>
            <PageTransition />
            <div>
                <form className="flex flex-col gap-4">
                    <label>
                        <p className="text-lg text-slate-50">Project name</p>
                        <input
                            type="text"
                            name="projectName"
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

export default TestITGALL

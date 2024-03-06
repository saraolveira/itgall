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
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">Entity name</p>
                        <input
                            type="text"
                            name="entityName"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">Contact person</p>
                        <input
                            type="text"
                            name="contactPerson"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">Contact email</p>
                        <input
                            type="email"
                            name="contactEmail"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">Website</p>
                        <input
                            type="url"
                            name="website"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">
                            Short description of the project
                        </p>
                        <textarea
                            name="description"
                            rows="6"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">
                            Information of the product/service that's going to
                            be tested (need it answers to, target, etc.)
                        </p>
                        <textarea
                            name="productServiceInformation"
                            rows="6"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">
                            Differential value
                        </p>
                        <textarea
                            name="differentialValue"
                            rows="6"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">
                            Estimated investment budget
                        </p>
                        <input
                            type="text"
                            name="budget"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Services required (market study, co-creation, design
                            consulting, support service, testing, scalability)
                        </p>
                        <textarea
                            name="servicesRequired"
                            rows="6"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Relation with other projects or funding sources
                        </p>
                        <textarea
                            name="relationProjectsFunding"
                            rows="6"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
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

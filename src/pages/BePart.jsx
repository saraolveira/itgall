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
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">Logo</p>
                        <input
                            type="file"
                            name="logo"
                            className="border-0 shadow-sm p-2 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 bg-white"
                            multiple
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">
                            Description of the entity
                        </p>
                        <textarea
                            name="description"
                            rows="6"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">
                            Why would you like to be part of the ITGALL network
                            and why would you like to participate in the testing
                            of technological solutions?
                        </p>
                        <textarea
                            name="why"
                            rows="6"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">
                            Does your entity have a Living Lab in operation?
                        </p>
                        <textarea
                            name="why"
                            rows="2"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            What material resources does your Living Lab have?
                        </p>
                        <label className="flex gap-2">
                            <input
                                type="checkbox"
                                name="laptop"
                                className="rounded-2xl w-4"
                            />
                            <p className="text-base text-slate-50">Laptop</p>
                        </label>
                        <label className="flex gap-2">
                            <input
                                type="checkbox"
                                name="desktop"
                                className="rounded-2xl w-4"
                            />
                            <p className="text-base text-slate-50">
                                Desktop Computer
                            </p>
                        </label>
                        <label className="flex gap-2">
                            <input
                                type="checkbox"
                                name="webcam"
                                className="rounded-2xl w-4"
                            />
                            <p className="text-base text-slate-50">Webcam</p>
                        </label>
                        <label className="flex gap-2">
                            <input
                                type="checkbox"
                                name="microphone"
                                className="rounded-2xl w-4"
                            />
                            <p className="text-base text-slate-50">
                                Microphone
                            </p>
                        </label>
                        <label className="flex gap-2">
                            <input
                                type="checkbox"
                                name="camera"
                                className="rounded-2xl w-4"
                            />
                            <p className="text-base text-slate-50">
                                Recording camera
                            </p>
                        </label>
                        <label className="flex gap-2">
                            <input
                                type="checkbox"
                                name="tripod"
                                className="rounded-2xl w-4"
                            />
                            <p className="text-base text-slate-50">
                                Tripod for the camera
                            </p>
                        </label>
                        <label className="flex gap-2">
                            <input
                                type="checkbox"
                                name="speakers"
                                className="rounded-2xl w-4"
                            />
                            <p className="text-base text-slate-50">Speakers</p>
                        </label>
                        <label className="flex gap-2">
                            <input
                                type="checkbox"
                                name="table"
                                className="rounded-2xl w-4"
                            />
                            <p className="text-base text-slate-50">Table</p>
                        </label>
                        <label className="flex gap-2">
                            <input
                                type="checkbox"
                                name="others"
                                className="rounded-2xl w-4"
                            />
                            <p className="text-base text-slate-50">Others</p>
                        </label>
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Can you adapt an area of ​​your center where you can
                            carry out product testing?
                        </p>
                        <textarea
                            name="area"
                            rows="2"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>
                    <label>
                        <p className="text-lg text-slate-50">
                            Square meters of your Living Lab space
                        </p>
                        <input
                            type="text"
                            name="meters"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Lines of action in which you mainly act
                        </p>
                        <select
                            name="actionLineAct"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-1/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        >
                            <option value="social">Social care </option>
                            <option value="health">Healthcare </option>
                            <option value="greentech">
                                Greentech (Green One Health)
                            </option>
                        </select>
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Lines of action in which you would like to
                            participate
                        </p>
                        <select
                            name="actionLineLike"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl lg:w-1/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100"
                        >
                            <option value="social">Social care </option>
                            <option value="health">Healthcare </option>
                            <option value="greentech">
                                Greentech (Green One Health)
                            </option>
                        </select>
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Typology of service provided
                        </p>
                        <textarea
                            name="service"
                            rows="2"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Typology and number of Living Lab users
                        </p>
                        <textarea
                            name="users"
                            rows="2"
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
                            Corporate video of the Living Lab
                        </p>
                        <input
                            type="file"
                            name="video"
                            className="border-0 shadow-sm p-2 rounded-2xl lg:w-2/5 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 bg-white"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Human resources and profiles destined for the
                            testing process
                        </p>
                        <textarea
                            name="humanResources"
                            rows="4"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Do you have an internal process protocol?
                            Established protocol/specific process flow for
                            testing
                        </p>
                        <textarea
                            name="protocol"
                            rows="4"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Collaborations with other entities
                        </p>
                        <textarea
                            name="collaborations"
                            rows="4"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Estimated/approximate costs by type of service
                            (including human resources involved, cost/hour)
                        </p>
                        <textarea
                            name="costs"
                            rows="2"
                            className="border-0 shadow-sm px-2 py-1 rounded-2xl w-full ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-lila-100 lg:w-4/5"
                        />
                    </label>

                    <label>
                        <p className="text-lg text-slate-50">
                            Previous testings carried out
                        </p>
                        <textarea
                            name="previousTestings"
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

export default BePart

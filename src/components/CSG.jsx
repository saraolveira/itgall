const CSG = () => {
    return (
        <div className="top-0 left-0 fixed w-screen h-svh pointer-events-none group">
            <a
                href="https://clustersaude.com/"
                target="_blank"
                className="right-4 lg:right-20 bottom-4 lg:bottom-6 z-40 absolute flex justify-center items-center gap-1 bg-white px-4 lg:py-2 rounded-3xl cursor-pointer pointer-events-auto"
            >
                <p className="group-hover:text-[#00226D] font-bold text-[#009BDB] text-xl transition-all duration-300">
                    Powered by
                </p>
                <img src="/csg.png" alt="Logo CSG" className="h-8" />
            </a>
        </div>
    )
}

export default CSG

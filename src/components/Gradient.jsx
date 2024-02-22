const Gradient = ({ direction }) => {
    return (
        <div
            className={`w-full h-36 bg-gradient-to-b from-lila-900 to-lila-400 ${
                direction === "bottom" ? "bg-gradient-to-b" : "bg-gradient-to-t"
            }`}
        ></div>
    )
}

export default Gradient

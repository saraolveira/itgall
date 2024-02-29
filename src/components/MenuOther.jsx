import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const MenuOther = ({ path, text, toggle }) => {
    const items = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    }

    return (
        <motion.div variants={items}>
            <Link
                onClick={toggle}
                className="bg-amarillo hover:bg-lila-900 p-2 rounded-3xl text-lila-900 text-xl hover:text-amarillo transition-all duration-300"
                to={path}
            >
                {text}
            </Link>
        </motion.div>
    )
}

export default MenuOther

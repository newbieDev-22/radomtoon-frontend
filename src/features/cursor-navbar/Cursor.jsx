
import { motion } from "framer-motion"
export default function Cursor({ position }) {
    return (
        <motion.li
            animate={position}
            className="absolute z-0 h-7 rounded-full bg-[#A1E3D9] md:h-12 text-white"
        />
    )
}

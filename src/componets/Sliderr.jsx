import images from './images'
import '../styles/Slider.css'
import {motion } from 'framer-motion'

const Slider = () => {
  return (
    <motion.div className="slider-container">
        <motion.div className="slider" drag = 'x' dragConstraints={{right:-50, left:-2860}}>
        {images.map(image =>(
            <motion.div className={`item ${image.class}`}>
                <img src={image.img} alt="" />
            </motion.div>
        ))}
        </motion.div>
    </motion.div>
  )
}

export default Slider

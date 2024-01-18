import images from './images'
import '../styles/Slider.css'
import {motion } from 'framer-motion'

const Slider1 = () => {
  return (
    <motion.div className="sliderC-container">
      <motion.div className="slider2" drag = 'x' dragConstraints={{right:-50, left:-2860}}>
        {images.map(image =>(
            <motion.div className={`item ${image.class}`}>
                <img src={image.img} alt="" />
            </motion.div>
        ))}
        </motion.div>
    </motion.div>
  )
}

export default Slider1

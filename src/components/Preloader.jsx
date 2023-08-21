import { motion } from 'framer-motion';
const Preloader = () => {
 
  return (
    
    <motion.div initial={{opacity:1,x:0}} whileInView={{opacity:0,x:"100%"}} transition={{duration:3}}  className='absolute inset-0  bg-green-500 z-[69] '>Preloader</motion.div>
  )
}

export default Preloader
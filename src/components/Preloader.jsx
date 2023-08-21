import { motion } from 'framer-motion';
const Preloader = () => {
 
  return (
    
    <motion.div initial={{x:0}} whileInView={{x:"100%"}} transition={{duration:3,delay:1}}  className='font-bold text-5xl flex-col absolute inset-0  bg-green-500 z-[69] '>Preloader</motion.div>
  )
}

export default Preloader
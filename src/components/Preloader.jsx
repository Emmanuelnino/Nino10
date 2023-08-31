import { motion } from 'framer-motion';
const Preloader = () => {
 
  return (
    
    <motion.div 
    initial={{x:0}}
     whileInView={{x:"100%"}} 
     transition={{duration:2,delay:1}}  
     className='font-bold text-5xl absolute inset-0  bg-green-500 z-[69] '>Hello.
     </motion.div>
  )
}

export default Preloader
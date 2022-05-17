import { motion, AnimatePresence } from 'framer-motion'

import { useContext } from 'react'
import { FeedbackContext } from '../context/FeedbackContext'

import FeedbackItem from "./FeedbackItem"

export default function FeedbackList(){
    const { feedback }= useContext(FeedbackContext)

    const feedbackList= feedback.map(item=>(
        <div key={item.id} className="feedback-list">
            <FeedbackItem key={item.id} item={item} />
        </div>
    ))

    const feedbackAnimation= (
        <div className='feedback-list'>
            <AnimatePresence>
               {feedback.map(item=>(
                   <motion.div key={item.id} initial={{opacity:0, }} animate={{opacity:1}} exit={{opacity:0}}>
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
    
    return(
        <div>{feedbackAnimation}</div>
    )   
}

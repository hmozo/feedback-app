import { createContext, useState  } from "react";

import { v4 as uuidv4 } from 'uuid'


import FeedbackData from '../data/FeedbackData'

export const FeedbackContext= createContext()

export const  FeedbackProvider= ({ children })=>{
    const [feedback, setFeedback]= useState(FeedbackData)
    const [feedbackEdited, setFeedbackEdited]= useState({ 
        item: { } ,
        edit: false
    })

    const deleteFeedback= (id)=>{
        const feedbackFiltered= feedback.filter(feedback=> feedback.id!==id)
        setFeedback(feedbackFiltered)
    }

    const editFeedback= (item)=>{
        setFeedbackEdited({
            item,
            edit: true
        })
    }

    const updateFeedback= (id, updatedItem) =>{
        setFeedback(feedback.map(item=>item.id===id?{ ...item, ...updatedItem } : item))
        setFeedbackEdited(prevFeedbackEdited=>({
            ...prevFeedbackEdited,
            edit: false
        }))
    }

    const addFeedback= (newFeedback)=>{
        newFeedback.id= uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

    return <FeedbackContext.Provider value={{ 
        feedback, feedbackEdited, deleteFeedback, addFeedback, editFeedback, updateFeedback }}>
        { children }
    </FeedbackContext.Provider>
}
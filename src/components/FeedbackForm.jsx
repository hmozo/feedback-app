import { useState, useContext, useEffect } from "react";

import Card from "./shared/Card";
import Button from './Button'
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackContext";

export default function FeedbackForm(){
    const [text, setText]= useState('')
    const [rating, setRating]= useState(10)
    const [btnDisabled, setBtnDisabled]= useState(true)
    const [message, setMessage]= useState('')
    
    const { addFeedback, feedbackEdited, updateFeedback }= useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdited.edit===true){
            setBtnDisabled(false)
            setText(feedbackEdited.item.text)
            setRating(feedbackEdited.item.rating)
        }
    }, [feedbackEdited])

    const handleTextChange= (event)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length<=10){
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(event.target.value)
    }

    const handleFormSubmit= (event)=>{
        event.preventDefault()
        if(text.trim().length>10){
            const newFeedback= {
                text,
                rating
            }

            if(feedbackEdited.edit===true){
                updateFeedback(feedbackEdited.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }

            setText('')
        }
    }

    return(
        <Card>
            <form onSubmit={handleFormSubmit}>
                <h2>Rate our service:</h2>
                <RatingSelect select= {(rating)=>setRating(rating)} selected={rating} />
                <div className="input-group">
                    <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>            
    )
}
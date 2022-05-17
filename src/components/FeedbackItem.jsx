import { useContext } from "react"

import { FaTimes, FaEdit } from 'react-icons/fa'

import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FeedbackContext } from "../context/FeedbackContext"

export default function FeedbackItem({ item }){

    const { deleteFeedback, editFeedback }= useContext(FeedbackContext)

    return(
        <Card reverse={item.reverse}>
            <div className='num-display'>{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <button className="edit" onClick={()=>editFeedback(item)}>
                <FaEdit color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes= {
    item: PropTypes.object.isRequired
}
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';

export default function MainPage(){
    return(
        <div>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </div>
    )
}
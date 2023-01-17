import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Review ({selectedGame}) {
    const [formData, setFormData] = useState({
        critique: "",
        review_score: 0,
        game_id: selectedGame.id
    })
    
    const {critique, review_score, game_id} = formData

    function handleChange (e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    function handleReview (e) {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handleReview}>
                <input type="text" name="critique" value={critique} placeholder="What are your thoughts?" onChange={handleChange} />
                <input type="number" name="review_score" value={review_score} min={0} max={10} onChange={handleChange}/>
                <button type="submit" name="submit">Click Me!</button>
            </form>
        </div>
    )
}

export default Review;
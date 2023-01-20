import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Review ({currentUser, selectedGame, userReviews, updateUserReviews}) {
    const [formData, setFormData] = useState({
        critique: "",
        review_score: 0,
        user_id: currentUser.id,
        game_id: selectedGame.id
    })
    
    const {critique, review_score, game_id} = formData

    function handleChange ({ target:{ name, value } }) {
        setFormData({...formData, [name]: value})
    }

    function handleReview (e) {
        e.preventDefault()
        console.log(formData)
        fetch("/new_review", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }).then(res => {if(res.ok) {
            res.json().then(data => updateUserReviews([...userReviews, data]))
        }})
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
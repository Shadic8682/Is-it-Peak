import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Review ({currentUser, selectedGame, userReviews, updateUserReviews}) {
    const navigate = useNavigate()
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
        }else {
            navigate("/games_list")
        }})
    }

    return (
        <div>
        <h1 className="text-2xl">Review for {selectedGame.name}</h1>
        <div className="w-full max-w-xs">
            <form onSubmit={handleReview} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="critique" value={critique} placeholder="What are your thoughts?" onChange={handleChange} />
                <input type="number" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="review_score" value={review_score} min={0} max={10} onChange={handleChange}/>
                <button type="submit" name="submit">Submit Review!</button>
            </form>
        </div>
        </div>
    )
}

export default Review;
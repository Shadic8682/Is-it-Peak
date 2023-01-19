function MyReviews ({userReviews}) {
    return (
        <div>
            <h1>Your reviews!</h1>
            {userReviews.map(reviews => [<img src={reviews.game.image_url} 
            alt={reviews.game.name}/>, 
            <h4>Review for {reviews.game.name}</h4>, 
            <h3>Rating: {reviews.review_score}</h3>,
            <p>{reviews.critique}</p>])}
        </div>
    )
}

export default MyReviews;
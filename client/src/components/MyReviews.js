function MyReviews ({userReviews, user}) {
    console.log(user)
    return (
        <div>
            <h1>Your reviews!</h1>
            {userReviews.map(reviews => [<img src={reviews.game.image_url} 
            alt={reviews.game.name}/>, 
            <h4>Review for {reviews.game.name}</h4>, 
            <h3>Rating: {reviews.review_score}</h3>,
            <p>{reviews.critique}</p>])}
            <h1>Games You've Reviewed</h1>
            {user.games.map(game => [<img src={game.image_url} alt={game.name}/>, <h3>{game.name}</h3>])}
        </div>
    )
}

export default MyReviews;
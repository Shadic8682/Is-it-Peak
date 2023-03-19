function MyReviews ({userReviews, user}) {
    console.log(user)
    return (
        
        <div className="flex justify-evenly">
            <div className="">
            <div className="text-center">
            <h1>Your reviews!</h1>
            </div>

            {userReviews.map(reviews => <div className="p-6 max-w-sm mx-auto bg-slate-500 rounded-xl shadow-lg flex space-x-4 hover:animate-pulse ">
            <div className="shrink-0">
            <img className="h-12 w-12" src={reviews.game.image_url}
            alt={reviews.game.name}/>
            </div>
            <div> 
            <h4>Review for {reviews.game.name}</h4>
            </div>
            <div className="text-xl"> 
            <h3>Rating: {reviews.review_score}</h3>
            </div>
            <div className="text-sm italic">
            <p>{reviews.critique}</p></div>
            </div>)}
            </div>
            <h1 className="flex justify-self-center">Games You've Reviewed</h1>
            {user.games.map(game => <div className="flex">
            <img className="inline_block h-12 w-12 rounded-full ring-2 ring-white" src={game.image_url} alt={game.name}/>
            <h3>{game.name}</h3>
            </div>)}
        </div>
    )
}

export default MyReviews;
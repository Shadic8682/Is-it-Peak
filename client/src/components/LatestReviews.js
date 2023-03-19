function LatestReviews ({reviews}) {
    return(
        <div className="p-6 max-w-sm mx-auto bg-slate-500 rounded-xl shadow-lg flex items-center space-x-4 hover:animate-pulse justify-items-center">
            <div className="shrink-0">
        {reviews.user.profile_image ? <img className="h-12 w-12" src={reviews.user.profile_image} alt="user"/> : <img className="h-12 w-12"
        src="https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg" 
        alt={reviews.user.username}/>}
        </div>
        <div>
        <h4>{reviews.user.username}</h4>
        </div>
        <div className="text-sm italic">
        <p>{reviews.critique}</p>
        </div>
        <h5>{reviews.review_score}</h5>
        </div>
    )
}

export default LatestReviews;
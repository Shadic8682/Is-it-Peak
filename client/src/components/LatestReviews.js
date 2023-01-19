function LatestReviews ({reviews}) {
    return(
        <div>
        {reviews.user.profile_image ? <img src={reviews.user.profile_image} alt="user"/> : <img 
        src="https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg" 
        alt={reviews.user.username}/>}
        <h4>{reviews.user.username}</h4>
        <p>{reviews.critique}</p>
        <h5>{reviews.review_score}</h5>
        </div>
    )
}

export default LatestReviews;
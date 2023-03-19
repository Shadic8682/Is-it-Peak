import React, { useState } from "react";
import LatestReviews from "./LatestReviews";
import my_logo from "./my_logo.png";

function Landing ({latestReviews, user}) {
    const reviews = latestReviews.map(reviews => <LatestReviews reviews={reviews} />)

    return(
        <div className="">
            {user ? <h1 className="text-2xl text-center">Welcome back, {user.username}!</h1> : null}
            <h4 className="text-lg font-medium text-center">Welcome to my humble review site! The premise here is to have a hub where our users are free to review the games they please
                while answering the simple question...
            </h4>
            <div className="mx-auto flex justify-center">
            <img className="logo" src={my_logo} />
            </div>
            <br></br>
            <h3>Not convinced that you want to be part of the community yet? Here's some of our latest reviews!</h3>
            <div className="flex ">
            {reviews}
            </div>
        </div>
    )
}

export default Landing;
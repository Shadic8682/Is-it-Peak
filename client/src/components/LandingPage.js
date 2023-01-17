import React, { useState } from "react";

function Landing ({latestReviews}) {
    console.log(latestReviews)
    return(
        <div>
            <h1>Landing Page</h1>
            <h4>Welcome to my humble review site! The premise here is to have a hub where our users are free to review the games they please
                while answering the simple question- is it peak?
            </h4>
            <br></br>
            <h3>Not convinced that you want to be part of the community yet? Here's some of our latest reviews!</h3>
        </div>
    )
}

export default Landing;
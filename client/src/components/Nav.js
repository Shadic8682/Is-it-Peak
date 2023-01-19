import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav ({currentUser, updateUser}) {
    const navigate = useNavigate();
    console.log(updateUser)
    
    function handleLogout() {
        fetch(`/logout`, {
            method: "DELETE",
          }).then((res) => {
            if (res.ok) {
              updateUser(false);
              navigate("/login");
            }
          });
        };
    return (
        <nav>
            <div className="navlink-wrapper">
                <NavLink to={'/'}>
                🎮 Home
                </NavLink>
                <NavLink to={'/login'}>
                    Login
                </NavLink>
                <NavLink to={'/update_user'}>
                ⚙️ User Settings
                </NavLink> 
                {currentUser ? [<NavLink to={'games_list'}>Game List</NavLink>, <NavLink to={'user_reviews'}>My Reviews</NavLink>, <button onClick={handleLogout}>Log Out</button>] : null}
            {currentUser.profile_image ? <img className="user-image" src={currentUser.profile_image} alt={currentUser.username} /> : <h6>{currentUser.username}</h6>}
            </div>
           
        </nav>
    )
}

export default Nav;
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav ({currentUser, updateUser}) {
    const navigate = useNavigate();
    
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
            <div className="flex items-center justify-center">
                <NavLink to={'/'} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                🎮 Home
                </NavLink>
                <NavLink to={'/login'} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                    Login
                </NavLink>
                <NavLink to={'/update_user'} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                ⚙️ User Settings
                </NavLink> 
                {currentUser ? [<NavLink to={'games_list'} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" >Game List</NavLink>, 
                <NavLink to={'user_reviews'} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">My Reviews</NavLink>, 
                <button onClick={handleLogout} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Log Out</button>] : null}
            {currentUser.profile_image ? <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={currentUser.profile_image} alt={currentUser.username} /> : <h6>{currentUser.username}</h6>}
            </div>
           
        </nav>
    )
}

export default Nav;
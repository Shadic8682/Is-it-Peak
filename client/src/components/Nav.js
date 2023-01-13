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
            <div className="navlink-wrapper">
                <NavLink to={'/'}>
                🎮 Home
                </NavLink>
                <NavLink to={'/login'}>
                    Login
                </NavLink>
            </div>
            <button onClick={handleLogout}>Log Out</button>
        </nav>
    )
}

export default Nav;
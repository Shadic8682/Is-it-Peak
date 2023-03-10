import { useState } from "react";
import { useNavigate } from "react-router-dom";


function UserEdit ({updateUser, user}) {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: user.name,
        username: user.username,
        email: user.email,
        profile_image: user.profile_image,
        password: user.password
      });
      const [errors, setErrors] = useState([]);
      const { name, username, email, password, profile_image } = formData;
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newUpdateUserInfo = {
          name,
          username,
          email,
          profile_image,
          password
        };
        fetch("/update_user", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUpdateUserInfo),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
                updateUser(user)
              navigate(`/`);
            });
          } else {
            res.json().then((json) => setErrors(Object.entries(json.errors)));
          }
        });
      };

      const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleDeleteAccount = (e) => {
        if (window.confirm("Are you sure you want to delete your account? This is permanent") === true) {
          fetch("destroy_user", {
              method: 'DELETE'
          }).then(res => {
            updateUser(false)
            navigate("/login")
          })
          ;
          // window.location.reload(false);
        }
      }
    
      return (
        <div id="update-user-container">
          <h2>Personal Info</h2>
          <form onSubmit={handleSubmit}>
            <p></p>
            <input 
              placeholder="Update name"
              type="text"
              name="name"
              value={name}
              onChange={changeHandler}
            />
            <br></br>
            <input className="input-field"
              placeholder="Update username"
              type="text"
              name="username"
              value={username}
              onChange={changeHandler}
            />
                    <br></br>
    
            <input className="input-field"
              placeholder="Update email"
              type="text"
              name="email"
              value={email}
              onChange={changeHandler}
            />
                    <br></br>

            <input className="input-field"
              placeholder="Update profile image"
              type="text"
              name="profile_image"
              value={profile_image}
              onChange={changeHandler}
            />
                    <br></br>        
    
            <input className="input-field"
              placeholder="Verify/update password"
              type="text"
              name="password"
              value={password}
              onChange={changeHandler}
            />
                    <br></br>
    
            <button className="input-field" type="submit">Save</button>
            <br></br>
            <h2>or</h2>
            <br></br>
          </form>
          <button onClick={handleDeleteAccount} className="input-field" type="submit">Delete account</button>
        </div>
      );
}

export default UserEdit;
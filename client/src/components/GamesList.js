import { useNavigate } from "react-router-dom";

function GamesList ({games, setSelectedGame}) {
    const navigate = useNavigate()
    console.log(games)


    function handleClick (e) {
        setSelectedGame(games)
        navigate("/new_review")
    }

    return (
    <div>
        <h3>{games.name}</h3>
        <img src={games.image_url} alt={games.name}/>
        <p>{games.description}</p>
        <button name={games.name} id={games.id} onClick={handleClick}>Review Me!</button>
    </div>
    )
}

export default GamesList;
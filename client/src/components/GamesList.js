import { useNavigate } from "react-router-dom";

function GamesList ({games, setSelectedGame}) {
    const navigate = useNavigate()

    function handleClick (e) {
        setSelectedGame(games)
        navigate("/new_review")
    }

    return (
    <div className="p-6 max-w-sm mx-auto bg-slate-500 rounded-xl shadow-lg flex items-center space-x-4 hover:animate-pulse justify-items-center">
        <div>
        <h3 className="game-card-title">{games.name}</h3>
        </div>
        <div className="shrink-0">
        <img className="h-12 w-12" src={games.image_url} alt={games.name}/>
        </div>
        <div>
        <p className="text-sm italic">{games.description}</p>
        </div>
        <div>
        <button className="review-button" name={games.name} id={games.id} onClick={handleClick}>Review Me!</button>
        </div>
    </div>
    )
}

export default GamesList;
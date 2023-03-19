import { useState } from 'react';
import GamesList from './GamesList';

function Game ({games, setSelectedGame}) {
    const gameList = games.map(game => <GamesList key={game.id} games={game} setSelectedGame={setSelectedGame}/>)
    return (
        <div className="flex">
            <h1 className='text-2xl'>Games</h1>
            {gameList}
        </div>
    )
}

export default Game;
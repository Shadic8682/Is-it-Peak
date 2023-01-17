import logo from '../logo.svg';
import '../App.css';
import { useState, useEffect } from 'react';
import Login from './LoginPage';
import Signup from './Signup';
import Review from './Review';
import Game from './Game';
import Landing from './LandingPage';
import {Route, Routes} from 'react-router-dom'
import Nav from './Nav';

function App() {

  const [currentUser, setCurrentUser] = useState(false)
  const [selectedGame, setSelectedGame] = useState(false)
  const [userReviews, setUserReviews] = useState([])
  const [gamesList, setGamesList] = useState([])
  const [latestReviews, setLatestReviews] = useState([])
 

  useEffect(() => {
    fetch("/authorized_user")
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              setCurrentUser(user);
            });
        }
      })
  }, [])

  useEffect(() => {
    fetch("games_list")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((games) => setGamesList(games))
      }
    })
  }, [])

  useEffect(() => {
    fetch("recent_reviews")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then(revObj => setLatestReviews(revObj))
      }
    })
  }, [])


  return (
    <div className="App">
      <Nav currentUser={currentUser} updateUser={setCurrentUser}/>
     <Routes>
      <Route path='/' element={<Landing latestReviews={latestReviews}/>} />
      <Route path='/login' element={<Login updateUser={setCurrentUser} updateUserReviews={setUserReviews} /> } />
      <Route path='/signup' element={<Signup updateUser={setCurrentUser}/>} />
      <Route path='/new_review' element={<Review selectedGame= {selectedGame}/>}/>
      <Route path='/games_list' element={<Game games={gamesList}/>}/>
     </Routes>
    </div>
  );
}

export default App;

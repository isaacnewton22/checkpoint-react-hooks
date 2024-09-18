import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Movies } from './Movies'
import MovieList from './MovieList'
import Filtre from './filtre'
function App() {
const [movies, setMovies] = useState([])
const [critere, setCritere] = useState(0)
let valeursTries = []

useEffect(() => {
    setMovies(Movies)
} , [])

useEffect(() => {
  console.log(critere)
  valeursTries = movies.filter(movie => movie.note == critere)
} , [critere])



  return (
    <>
        <Filtre setCritere= {setCritere} />
        <MovieList Movies={movies.filter(movie => movie.note == critere)} />
    </>
  )
}

export default App

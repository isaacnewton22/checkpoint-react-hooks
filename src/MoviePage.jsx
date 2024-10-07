import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Movies } from './Movies'
import MovieList from './MovieList'
import Filtre from './filtre'
function MoviePage() {
const [movies, setMovies] = useState([])
const [critere, setCritere] = useState(0)
let valeursTries = [...movies]

useEffect(() => {
    setMovies(Movies)
} , [])

useEffect(() => {
  console.log(critere)
  valeursTries = critere === 0 ? movies : movies.filter(movie => movie.note == critere)
} , [critere])

const Ajouter = () => {
  let newFilm = {}
  newFilm.name = prompt('Entrer le nom du film');
  newFilm.description = prompt('Entrer la description du film');
  newFilm.note = prompt('Entrer la note du film');
  newFilm.image = prompt('Entrer l\'image du film');
  console.log(newFilm)
  setMovies([...movies, newFilm])
}

  return (
    <>
        <button onClick={Ajouter}>Ajouter</button>
        <Filtre setCritere= {setCritere} />
        <MovieList Movies={critere === 0 ? movies : movies.filter(movie => movie.note == critere)} />
    </>
  )
}

export default MoviePage
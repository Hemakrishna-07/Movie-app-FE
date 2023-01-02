import { useEffect, useState } from 'react';
import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { API } from './global';

export function MovieList() {

  const [movieList, setMovieList] = useState([])

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs))
  }

  useEffect(() => getMovies(), [])

  const deleteMovie = (id) => {
    console.log ("Deleting...", id)

    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    })
      // .then((data) => data.json())
      .then(() => getMovies())
  }

  const navigate = useNavigate()

  return (
    <div className='movie-list-container'>
      {movieList.map((mv) => (
        <Movie 
          key={mv.id} 
          movie={mv} 
          id={mv.id}
          deleteButton={
            <IconButton color='error' onClick={() => deleteMovie(mv.id)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          } 
          editButton={
            <IconButton color='secondary' onClick={() => navigate(`/movies/edit/${mv.id}`)} aria-label="edit">
              <EditIcon />
            </IconButton>
          }
        />
        ))}
    </div>
  );
}

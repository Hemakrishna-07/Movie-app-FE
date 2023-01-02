import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from "react";
import { API } from './global';

export function MovieDetails() {
  const { id } = useParams();
  // const movie = movieList[id];

  // movie -> from api
  const [movie, setMovie] = useState({})
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs))
  }, [id])

  const styles = {
    color: movie.rating <= 8.5 ? "red" : "green"
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="700"
        src={movie.trailer}
        title={movie.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className='movie-details-container'>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name}</h2>
          <p style={styles} className='movie-rating'>⭐ {movie.rating}</p>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
        <Button onClick={() => navigate(-1)} startIcon={<KeyboardBackspaceIcon />} variant="contained">Back</Button>
      </div>
    </div>
  );
}

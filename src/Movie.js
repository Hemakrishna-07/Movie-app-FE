import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export function Movie({ movie, id, deleteButton, editButton }) {

  const [show, setShow] = useState(true);

  const styles = {
    color: movie.rating <= 8.5 ? "red" : "green"
  };

  const navigate = useNavigate()

  return (
    <Card className='movie-container'>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <CardContent>
        <div className='movie-specs'>
          <h2 className='movie-name'>
            {movie.name}
            <IconButton
              onClick={() => setShow(!show)}
              aria-label="Toggle summary"
              color='primary'
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => navigate(`/movies/${id}`)}
              aria-label="Movie Information"
              color='primary'
            >
              <InfoIcon/>
            </IconButton>
          </h2>
          <p style={styles} className='movie-rating'>⭐ {movie.rating}</p>
        </div>
        {show ? <p className='movie-summary'>{movie.summary}</p> : null}
      </CardContent>
      <CardActions className='counter-edit-delete'>
          <div>
            <Counter /> 
          </div>
          <div>
            {editButton} {deleteButton}  
          </div>         
      </CardActions>
    </Card>
  );
}

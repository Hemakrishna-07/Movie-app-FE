// import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup"
import { API } from './global';


const movieValidationSchema = yup.object({
  name: yup.string().required("Why not fill this Name?").min(1),
  poster: yup.string().required("Why not fill this Poster?").min(4),
  rating: yup.number().required("Why not fill this Rating?").min(0).max(10),
  summary: yup.string().required("Why not fill this Summary?").min(20),
  trailer: yup.string().required("Why not fill this Trailer?").min(4),
})

// export function AddMovie({ movieList, setMovieList }) {
export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const {handleSubmit, values, handleBlur, handleChange, touched, errors} = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      console.log("Movie Details", newMovie)
      addMovie(newMovie)
    },
  })

  const navigate = useNavigate()

  const addMovie = (newMovie) => {

    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer
    // };

    // setMovieList([...movieList, newMovie]);

    // fetch POST
    // 1. method - POST
    // 2. data (newMovie) - body & JSON
    // 3. Header - JSON

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((data) => data.json())
      .then(() => navigate("/movies"))
      .catch((err) => console.log("Error occured", err))
  }


  return (
    <form onSubmit={handleSubmit} className='add-movie-form'>
      <TextField
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}

        id="outlined-basic"
        label="Movie Name"
        variant="outlined"
        // onChange={(e) => setName(e.target.value)} 
       />
       {/* {touched.name && errors.name ? errors.name : null} */}

      <TextField
        name="poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      
        id="outlined-basic"
        label="Movie Poster url"
        variant="outlined"
        // onChange={(e) => setPoster(e.target.value)} 
      />
      {/* {touched.poster && errors.poster ? errors.poster : null} */}

      <TextField
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}

        id="outlined-basic"
        label="Movie Rating"
        variant="outlined"
        // onChange={(e) => setRating(e.target.value)} 
      />
      {/* {touched.rating && errors.rating ? errors.rating : null} */}

      <TextField
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}

        id="outlined-basic"
        label="Movie Summary"
        variant="outlined"
        // onChange={(e) => setSummary(e.target.value)} 
      />
      {/* {touched.summary && errors.summary ? errors.summary : null} */}

      <TextField
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}

        id="outlined-basic"
        label="Movie Trailer"
        variant="outlined"
        // onChange={(e) => setTrailer(e.target.value)} 
      />
      {/* {touched.trailer && errors.trailer ? errors.trailer : null} */}

      {/* <p>{name}-{rating}-{poster}-{summary}</p> */}

      <Button
        // onClick={addMovie}
        type='submit'
        variant="contained"
      >Add Movie
      </Button>

      {/* <div>
        values <br/>
        <pre>{JSON.stringify(values, null, 2)}</pre> <br/>
        Error <br/>
        <pre>{JSON.stringify(errors)}</pre> <br/>
        Touched <br/>
        <pre>{JSON.stringify(touched)}</pre> <br/>
      </div> */}

    </form>
  );
}

import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AddColor } from './AddColor';
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';
import { NotFound } from './NotFound';
import { Home } from './Home';
// import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST'
import { MovieDetails } from './MovieDetails';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BasicForm } from './BasicForm';
import { EditMovie } from './EditMovie';


function App() {

  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // const [movieList, setMovieList] = useState([])
  const navigate = useNavigate()

  // useEffect(() => {
  //   fetch("https://632161eafd698dfa29f6a0df.mockapi.io/movies")
  //     .then((data) => data.json())
  //     .then((mvs) => setMovieList(mvs))
  // }, [])


  return (
    <ThemeProvider theme={darkTheme}>
    <Paper sx={{minHeight: "100vh", borderRadius: "0px"}} elevation={2} >
    <div className="App">

      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/add-movie">Add Movie</Link></li>
        <li><Link to="/color-game">Color Game</Link></li>
      </ul> */}

      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit">Home</Button>
          <Button onClick={() => navigate("/movies")} color="inherit">Movies</Button>
          <Button onClick={() => navigate("/add-movie")} color="inherit">Add Movie</Button>
          <Button onClick={() => navigate("/color-game")} color="inherit">Color Game</Button>
          <Button 
            onClick={() => setMode(mode === "light" ? "dark" : "light")} 
            color="inherit"
            sx={{marginLeft: "auto"}}
            startIcon = {mode === "light" ? <Brightness4Icon/> : <Brightness7Icon/>}
          >
            {(mode === "light" ? "dark" : "light")} mode
          </Button>
        </Toolbar>
      </AppBar>
      <div className='routes-counter'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/films" element={<Navigate replace to="/movies" />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/edit/:id" element={<EditMovie />} />
          <Route path="/color-game" element={<AddColor/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/basic-form" element={<BasicForm />} />
        </Routes>
      </div>
    </div>
    </Paper>
    </ThemeProvider>
  );
}


export default App;

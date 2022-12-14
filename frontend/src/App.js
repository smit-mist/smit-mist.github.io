import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChessTV from "./pages/broadcast/ChessTV";
import BroadCast from "./pages/broadcast/BroadCast";
import DisplayTournament from "./pages/broadcast/DisplayTournament";
import Test from "./helper/Test";
import GamePlay from "./components/chessboard/GamePlay";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import SignIn from "./pages/auth/SignIn";
import UserBasic from "./pages/auth/UserBasic";
import Home from "./pages/home/Home";
import { Paper } from "@mui/material";
import "./index.css";
import Play from "./pages/play/Play";
import CreateGame from "./pages/play/CreateGame";
import JoinGame from "./pages/play/JoinGame.jsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#16213E",
    },
    secondary: {
      main: "#0F3460",
    },
    third: {
      main: "#533483",
    },
    error: {
      main: "#E94560",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
    // contrastThreshold: 3,
    // tonalOffset: 0.2,
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ m: 0, minHeigth:'100%' }}>
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<UserBasic />}>
              <Route path="/" exact={true} element={<Home />} />
              <Route path="/analysis" element={<GamePlay />} />
              <Route path="/tv" element={<ChessTV />} />
              <Route path="/play" element={<CreateGame/>} />
              <Route path="/game/:id" element={<JoinGame/>}/>
              <Route path="/broadcast" element={<BroadCast />} />
              <Route
                path="/tournament/:slug/:id"
                element={<DisplayTournament />}
              />
              <Route path="/test" element={<Test />} />
              <Route path="*" element={<h1>No such route</h1>} />
            </Route>
          </Routes>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

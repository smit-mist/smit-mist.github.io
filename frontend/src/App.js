import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChessTV from "./pages/ChessTV";
import BroadCast from "./pages/broadcast/BroadCast";
import DisplayTournament from "./pages/broadcast/DisplayTournament";
import Test from "./helper/Test";
import GamePlay from "./components/chessboard/GamePlay";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import SignIn from "./pages/auth/SignIn";
import UserBasic from "./pages/auth/UserBasic";
import Home from "./pages/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4400",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<UserBasic />}>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/analysis" element={<GamePlay />} />
            <Route path="/tv" element={<ChessTV />} />
            <Route path="/news" element={<h1>This is News</h1>} />
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
  );
}

export default App;

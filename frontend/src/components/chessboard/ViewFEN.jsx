import React from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import { loadPGN } from "../../helper/ChessEditor";
import { Skeleton } from "@mui/material";


const ViewFEN = (props) => {
  const { currGame } = props;
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(new Chess());
  
  const loadGame = () => {
    let temp = loadPGN(currGame);
    let myGame = new Chess();
    myGame.load_pgn(temp);
    setGame(myGame);
    setLoading(false);
  };
  useEffect(() => {
    loadGame();
  }, []);
  if (loading) {
    return <Skeleton variant="rectangular" width={200} height={200} />;
  }

  return (
    <Chessboard
      position={game.fen()}
      animationDuration={500}
      boardWidth={200}
      arePiecesDraggable={false}
    />
  );
};

export default ViewFEN;
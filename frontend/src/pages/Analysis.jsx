import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { GameTree } from "../helper/GameTree";
import Tree from "react-d3-tree";
import Button from "@mui/material/Button";



const Analysis = () => {
  const [game, setGame] = useState(new Chess());
  const [tree, setTree] = useState(new GameTree());
  if (!tree.root) {
    tree.addNode({ move: "", name: "" });
    setTree(tree);
  }
  function makeAMove(move) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setTree(tree);
    setGame(gameCopy);
    tree.makeMove({ move, name: game.history()[game.history().length - 1] });
    return result;
    // null if the move was illegal, the move object if the move was legal
  }
 

  function undoPreviousMove() {
    var temp = { ...game };
    temp.undo();
    tree.undoCurrentMove();
    setTree(tree);
    setGame(temp);
  }
  function moveSelected(s) {
    if (!game.get(s)) {
      return;
    }
  }
  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    if (move === null) return false;
    return true;
  }
  return (
    <>
      <Chessboard
        position={game.fen()}
        onPieceDrop={onDrop}
        animationDuration={500}
        onSquareClick={(s) => {
          moveSelected(s);
        }}
      />

      {game.pgn()}

      <Button onClick={undoPreviousMove}>Text</Button>
      <div id="treeWrapper" style={{ width: "500", height: "500" }}>
        {" "}
        <Tree data={tree.getJSON(tree.root)} />
      </div>
    </>
  );
};

export default Analysis;
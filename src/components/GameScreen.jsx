import Button from "./Button";

import "../styles/GameScreen.css";

export default function GameScreen({ func, display, score }) {
  console.log(score);
  return (
    <div className="gameScreen">
      <div>
        {display
          ? `You win! How about one more?`
          : `You lost good try, have another go?`}
      </div>
      {/* Game over / game win your score is : {score} */}
      <Button func={func} name={"reset"} />
    </div>
  );
}

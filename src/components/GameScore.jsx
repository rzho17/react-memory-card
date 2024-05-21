export default function GameScore({ currentScore, hiScore }) {
  return (
    <div className="gameScore">
      <div className="currentScore">{currentScore}</div>
      <div className="hiScore">{hiScore}</div>
    </div>
  );
}

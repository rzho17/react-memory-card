export default function GameScore({ currentScore, hiScore }) {
  return (
    <div className="gameScore">
      <div className="currentScore">Current Score: {currentScore}</div>
      <div className="hiScore">Best Score: {hiScore}</div>
    </div>
  );
}

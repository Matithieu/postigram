// RandomSoccerBalls.tsx
import React from 'react';

const RandomSoccerBalls: React.FC = () => {
  // You can adjust the number of soccer balls and their styles as needed
  const numberOfBalls = 5;

  const renderSoccerBalls = () => {
    const balls = [];
    for (let i = 0; i < numberOfBalls; i++) {
      // Generate random positions for each ball
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;

      // You can customize the ball's appearance and size here
      const ballStyle: React.CSSProperties = {
        position: 'absolute',
        top,
        left,
        width: '50px',
        height: '50px',
        background: 'url(/soccer-ball.png)',
        backgroundSize: 'cover',
        zIndex: -1,
      };

      balls.push(<div key={i} style={ballStyle}></div>);
    }
    return balls;
  };

  return <>{renderSoccerBalls()}</>;
};

export default RandomSoccerBalls;


import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateRingPosition = (e: MouseEvent) => {
      setTimeout(() => {
        setRingPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', updateRingPosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', updateRingPosition);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <div
        className="custom-cursor"
        style={{
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
        }}
      />
      <div
        className="custom-cursor-ring"
        style={{
          left: `${ringPosition.x - 20}px`,
          top: `${ringPosition.y - 20}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;

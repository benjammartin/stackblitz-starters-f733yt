import * as React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';

const Canvas = () => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  useGesture(
    {
      onDrag: ({ offset: [x, y] }) => {
        api.start({ x, y });
      },
    },
    { target: window }
  );

  return (
    <animated.div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'white',
        position: 'relative',
        cursor: 'grab',
        x,
        y,
      }}
    >
      sddsds
    </animated.div>
  );
};

export default Canvas;

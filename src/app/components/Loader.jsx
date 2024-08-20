import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  // Ensure progress is a valid number
  const progressValue = typeof progress === 'number' ? progress : 0;

  return (
    <Html center>
      <span className='canvas-load'></span>
      <p className='text-sm text-[#f1f1f1] font-extrabold mt-10'>
        {progressValue.toFixed(2)}%
      </p>
    </Html>
  );
}

export default Loader;

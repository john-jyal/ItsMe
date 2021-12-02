import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import MakeError from './MakeError';

const Work1201 = () => {
  const [isError, setIsError] = useState(false);
  return (
    <div>
      <h1>에러바운더리 예제</h1>
      <ErrorBoundary isError={isError} setIsError={setIsError}>
        <MakeError isError={isError} setIsError={setIsError} />
      </ErrorBoundary>
    </div>
  );
};

export default Work1201;

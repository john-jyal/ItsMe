import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ThrowError from './ThrowError';
import ReturnError from './ReturnError';

const Work1201 = () => {
  return (
    <div>
      <h1>에러바운더리 예제</h1>
      <ErrorBoundary>
        <h1 style={{ color: 'blue' }}>여긴 에러전파를 막았습니다</h1>
        <ThrowError />
      </ErrorBoundary>
      <h1 style={{ color: 'red' }}>여긴 에러전파를 막지 않았습니다</h1>
      <ThrowError />
      <ErrorBoundary>
        <h1 style={{ color: 'green' }}>여긴 에러를 리턴합니다</h1>
        <ReturnError />
      </ErrorBoundary>
    </div>
  );
};

export default Work1201;

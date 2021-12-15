import React, { useState } from 'react';

const ThrowError = () => {
  const [isError, setIsError] = useState(false);
  const onClick = () => {
    setIsError(true);
  };
  if (isError) {
    throw new Error();
  }
  return (
    <div>
      <h1>버튼을 눌러보세요</h1>
      <button onClick={onClick}>버튼</button>
    </div>
  );
};

export default ThrowError;

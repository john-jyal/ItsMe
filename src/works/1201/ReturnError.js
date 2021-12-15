import React, { useState } from 'react';

const ReturnError = () => {
  const [isError, setIsError] = useState(false);
  const onClick = () => {
    setIsError(true);
  };
  if (isError) {
    return new Error();
  }
  return (
    <div>
      <h1>버튼을 눌러보세요</h1>
      <button onClick={onClick}>버튼</button>
    </div>
  );
};

export default ReturnError;

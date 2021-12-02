import React from 'react';

const MakeError = (props) => {
  const { isError, setIsError } = props;
  const onClick = () => {
    setIsError(true);
  };
  if (isError) throw new Error();
  return (
    <div>
      <h1>버튼을 눌러보세요</h1>
      <button onClick={onClick}>여기</button>
    </div>
  );
};

export default MakeError;

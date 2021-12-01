import React, { useState } from 'react';
import View from './View';

const Work1129 = () => {
  const [flag, setFlag] = useState(null);
  const onClick = (e) => {
    setFlag(e.target.id);
  };
  return (
    <div>
      <h1>서스펜스 예제</h1>
      <div className="button-group" onClick={onClick}>
        <button id={0}>기존방식</button>
        <button id={1}>suspense 적용</button>
      </div>
      {flag !== null && <View flag={flag} />}
    </div>
  );
};

export default Work1129;

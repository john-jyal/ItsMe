import React, { Suspense, useState } from 'react';
import CommonComponent from './CommonComponent';
import SuspensedComponent from './SuspensedComponent';

const Converter = (props) => {
  const { flag, num } = props;
  if (flag === '0') return <CommonComponent num={num} />;
  if (flag === '1')
    return (
      <Suspense fallback={<div>로딩중(서스펜스)</div>}>
        <SuspensedComponent num={num} />
      </Suspense>
    );
  return <></>;
};

const View = (props) => {
  const { flag } = props;
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>방식을 선택해주세요</h1>
      <div>
        <button onClick={() => setNum(0)}>1번</button>
        <button onClick={() => setNum(1)}>2번</button>
        <button onClick={() => setNum(2)}>3번</button>
        <button onClick={() => setNum(3)}>4번</button>
      </div>
      <Converter flag={flag} num={num} />
    </div>
  );
};

export { View as default };

import React, { useState, useEffect } from 'react';
import { loadData } from './api';

const CommonComponent = (props) => {
  const { num } = props;
  const [data, setData] = useState({});
  const onLoad = async (ind) => {
    setData(false);
    const tmp = await loadData(ind);
    setData(tmp);
  };
  useEffect(() => {
    onLoad(num);
    console.log(num);
  }, [num]);
  return (
    <div>
      {!data ? (
        <div>로딩중(기존)</div>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <h2>{data.desc}</h2>
        </div>
      )}
    </div>
  );
};

export default CommonComponent;

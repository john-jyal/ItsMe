import React, { useEffect, useState } from 'react';
import { loadData } from './api';

const SuspensedComponent = (props) => {
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
  if (!data) throw new Promise(() => {});
  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <h2>{data.desc}</h2>
      </div>
    </div>
  );
};

export default SuspensedComponent;

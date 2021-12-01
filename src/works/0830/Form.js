import React, { useState } from 'react';

const Form = (props) => {
  const { users, setUsers } = props;
  const [user, setUser] = useState({ id: '', password: '' });
  const onClick = () => {
    setUsers([...users, user]);
  };
  const onReset = () => {
    setUsers([]);
  };
  const onChange = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <form onChange={onChange}>
        <label>
          아이디 :
          <input type="text" name="id" />
        </label>
        <label>
          비밀번호 :
          <input type="password" />
        </label>
        <button type="button" onClick={onClick}>
          제출
        </button>
        <button type="button" onClick={onReset}>
          초기화
        </button>
      </form>
    </>
  );
};

export default Form;

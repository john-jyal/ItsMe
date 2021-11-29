import React, { useState } from 'react';

const Form = (props) => {
  const { setUsers } = props;
  const [user, setUser] = useState();
  const onClick = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <form>
        <label>
          아이디 :
          <input type="text" />
        </label>
        <label>
          비밀번호 :
          <input type="password" />
        </label>
        <button type="button" onClick={onClick}>
          제출
        </button>
      </form>
    </>
  );
};

export default Form;

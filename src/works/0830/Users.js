import React from 'react';

const containerStyle = {
  borderTop: '1px solid grey',
  marginTop: '10px',
  padding: '20px',
  boxSizing: 'content-box',
  alignItems: 'middle',
};
const Users = (props) => {
  const { users } = props;
  return (
    <div style={containerStyle}>
      {users.map((user, index) => {
        const { id, password } = user;
        return (
          <p>
            <div>유저 {index + 1}</div>
            <div>아이디 : {id}</div>
            <div>비번 : {password}</div>
          </p>
        );
      })}
    </div>
  );
};

export default Users;

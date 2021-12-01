import React, { useState } from 'react';
import Form from './Form';
import Users from './Users';

const Work0830 = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Form users={users} setUsers={setUsers} />
      <Users users={users} />
    </div>
  );
};

export default Work0830;

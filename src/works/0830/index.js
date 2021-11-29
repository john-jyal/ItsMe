import React, { useState } from 'react';
import Form from './Form';
import Users from './Users';

const Work0830 = () => {
  const [users, setUsers] = useState();

  return (
    <div>
      <Form setUsers={setUsers} />
      <Users users setUsers />
    </div>
  );
};

export default Work0830;

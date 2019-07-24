import React, { useState } from 'react';
import './App.css';
import MemberList from './components/MemberList';
import Form from './components/Form';

function App() {
  const [member, setMember] = useState({ name: 'Leana', email: 'Leana@gmail.com', role: 'front-end'});
  const [memberList, setMemberList] = useState([member]);

  return (
    <div className="App">
      <MemberList list={memberList}/>
      <Form member={member} setMember={setMember} memberList={memberList} setMemberList={setMemberList}/>
    </div>
  );
}

export default App;

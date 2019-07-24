import React, { useState } from 'react';
import './App.css';
import MemberList from './components/MemberList';
import Form from './components/Form';

function App() {
  const [member, setMember] = useState({ id: 0, name: 'Leana', email: 'Leana@gmail.com', role: 'front-end'});
  const [id, setId] = useState(0);
  const [memberList, setMemberList] = useState([member]);
  const [memberToEdit, setMemberToEdit] = useState();

  function editMember(memberId) {
console.log('inside funtion edit member', 'NAME', id)
  memberList.forEach(member => {
    if (member.id === memberId) {
      setMemberToEdit(member);
    }
    console.log('member to edit', memberToEdit)
  })
  // console.log('member to edit', memberToEdit)
  }

  return (
    <div className="App">
      <MemberList list={memberList} editMember={editMember}/>
      <Form member={member} setMember={setMember} 
            memberList={memberList} 
            setMemberList={setMemberList}
            memberToEdit={memberToEdit}
            id = {id}
            setId={setId}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import MemberList from './components/MemberList';
import Form from './components/Form';

function App() {
  const [id, setId] = useState(0);
  const [memberList, setMemberList] = useState([{ id: 0, name: 'Leana', email: 'Leana@gmail.com', role: 'front-end'}]);
  const [memberToEdit, setMemberToEdit] = useState();

  function editMember(memberId) {
    memberList.forEach(member => {
      if (member.id === memberId) {
        setMemberToEdit(member);
      }

    })
  }

  return (
    <div className="App">
      <MemberList list={memberList} editMember={editMember}/>
      <Form 
            memberList={memberList} 
            setMemberList={setMemberList}
            memberToEdit={memberToEdit}
            setMemberToEdit={setMemberToEdit}
            id = {id}
            setId={setId}
      />
    </div>
  );
}

export default App;

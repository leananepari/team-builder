import React, { useState } from 'react';
import './App.css';
import MemberList from './components/MemberList';
import Form from './components/Form';
import Teams from './components/Teams';

function App() {
  const [id, setId] = useState(0);
  const [memberList, setMemberList] = useState([{ id: 0, name: 'Leana', email: 'Leana@gmail.com', role: 'front-end'}]);
  const [memberToEdit, setMemberToEdit] = useState();

  const [teams, setTeams] = useState([{'Leanas_team': memberList}]);

  function editMember(memberId) {
    memberList.forEach(member => {
      if (member.id === memberId) {
        setMemberToEdit(member);
      }

    })
  }

  return (
    <div className="App">
      <Teams />
      <MemberList 
            list={memberList} 
            editMember={editMember} 
            teams={teams}/>
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

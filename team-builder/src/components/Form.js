import React, { useEffect, useState } from 'react';
import '../App.css';

function Form( { member, setMember, memberList, setMemberList, memberToEdit, id, setId }) {
  const [memberPassed, setMemberPassed] = useState({name: undefined, email: undefined, role: undefined});

  useEffect(() => {
    if (memberToEdit) {
      setMemberPassed(memberToEdit);
    }
  }, [memberToEdit])

  function handleChange(event) {
    if (memberToEdit) {
      setMemberPassed({...memberPassed, [event.target.name]: event.target.value})
    }

    setMember({ ...member, [event.target.name]: event.target.value, 'id': id + 1 });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (memberToEdit) {
      memberList.forEach((member, index) => {
        if (member.id === memberToEdit.id) {
          memberList[index] = memberPassed;
          setMemberList([...memberList]);
        }
      })
    } else {
      setMemberList([...memberList, member]);
      setId(id + 1);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{width: '500px', margin: '0 auto', marginTop: '40px'}}>
      <fieldset>
        <legend>Add a Member</legend>
        <div >
          <label>
            Name
            <div>
              <input
                type="text"
                name="name"
                value={memberPassed.name}
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={memberPassed.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="role"
            name="role"
            value={memberPassed.role}
            placeholder="Role"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Add
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
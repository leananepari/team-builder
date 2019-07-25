import React, { useEffect, useState } from 'react';

function Form( {  memberList, setMemberList, memberToEdit, setMemberToEdit, id, setId }) {
  const [member, setMember] = useState({name: '', email: '', role: ''});

  useEffect(() => {
    if (memberToEdit) {
      setMember(memberToEdit);
    }
  }, [memberToEdit])

  function handleChange(event) {
    if (memberToEdit) {
      setMember({...member, [event.target.name]: event.target.value, 'id': memberToEdit.id})
    } else {
      setMember({ ...member, [event.target.name]: event.target.value, 'id': id + 1 });
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (memberToEdit) {
      memberList.forEach((item, index) => {
        if (item.id === memberToEdit.id) {
          memberList[index] = member;
          setMemberList([...memberList]);
        }
      })
      setMemberToEdit(undefined);
    } else {
      setMemberList([...memberList, member]);
      setId(id + 1);
    }
    setMember({name: '', email: '', role: ''})
  }

  return (
    <form id="form" onSubmit={handleSubmit} style={{width: '500px', margin: '0 auto', marginTop: '40px'}}>
      <fieldset>
        <legend>Add a Member</legend>
        <div >
          <label>
            Name
            <div>
              <input
                type="text"
                name="name"
                value={member.name}
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
            value={member.email}
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
            value={member.role}
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
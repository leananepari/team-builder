import React from 'react';
import '../App.css';

function Form( { member, setMember, memberList, setMemberList }) {

  
  function handleChange(event) {
    setMember({ ...member, [event.target.name]: event.target.value });
    // console.log('member', member)
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    setMemberList([...memberList, member])
    // console.log('submit LIST: ', memberList);
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
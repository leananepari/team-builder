import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: left;
  text-align: left;
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid black;
  padding: 20px;
`

function Member( { member, editMember }) {

  return (
    <Card>
      <h2>Name: {member.name}</h2>
      <h2>Email: {member.email}</h2>
      <h2>Role: {member.role}</h2>
      <NavHashLink smooth to="/#form"><div style={{border: '1px solid gray', width: '40px', textAlign: 'center'}} onClick={() => editMember(member.id)}>Edit</div></NavHashLink>
    </Card>
  );
}

export default Member;
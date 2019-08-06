import React from 'react';
import styled from 'styled-components';
import Member from './Member';

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function MemberList( { list, editMember }) {

  return (
    <ListWrap>
      {list.map((member, index) => {
        return <Member key={index} member={member} editMember={editMember}/>
      })}
    </ListWrap>
  );
}

export default MemberList;
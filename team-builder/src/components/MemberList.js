import React from 'react';
import styled from 'styled-components';
import Member from './Member';

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function MemberList( { list }) {

  return (
    <ListWrap>
      {list.map((member, index) => {
        return <Member key={index} member={member}/>
      })}
    </ListWrap>
  );
}

export default MemberList;
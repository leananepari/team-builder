import React, { useState } from 'react';
import styled from 'styled-components';
// import Dropdown from 'react-dropdown';
import { Dropdown } from 'semantic-ui-react';



function Teams() {
const [options, setOptions] = useState([
      {key: 'Leana\' Team',
       text: 'Leana\' Team',
       value: 'Leana\' Team'}, 
       {key: 'Team 2',
        text: 'Team 2',
        value: 'Team 2',}
      ]);
  return (
    <Dropdown style={{width: '500px', margin: '0 auto'}}
    placeholder='Select a Team'
    fluid
    selection
    options={options}
  />
  );
}

export default Teams;
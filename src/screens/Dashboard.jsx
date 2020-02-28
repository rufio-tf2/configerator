import React, { useState } from 'react';
import styled from 'styled-components';

import { Button, CFGOptions, GamePath } from '../components';

const DashboardContainer = styled.div`
  height: 100%;
`;

const Actions = styled.div`
  grid-area: ${props => props.gridArea};
  margin: 0 auto;
`;

const SaveButton = styled(Button)`
  background: linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
  background-color: #77b55a;
  border: 1px solid #4b8f29;
  border-radius: 4px;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #5b8a3c;

  &:hover {
    box-shadow: inset 0px 10px 14px -7px #3e7327;
    background: linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
    background-color: #72b352;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const ResetButton = styled(Button)`
  border-radius: 4px;
  font-size: 13px;
  margin-right: 0.5em;
  padding: 6px 12px;
`;

const Top = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-areas: 'game-path divider actions';
  padding: 0.5em;
`;

const Divider = styled.div`
  border-left: 1px solid black;
  margin: 0 auto;
  grid-area: divider;
`;

const Dashboard = () => {
  const [gamePath, setGamePath] = useState('');

  return (
    <DashboardContainer className="Dashboard">
      <Top>
        <Actions gridArea="actions">
          <ResetButton>Reset</ResetButton>
          <SaveButton>Save</SaveButton>
        </Actions>
        <Divider />
        <GamePath
          gamePath={gamePath}
          gridArea="game-path"
          setGamePath={setGamePath}
        />
      </Top>
      <CFGOptions />
    </DashboardContainer>
  );
};

export default Dashboard;

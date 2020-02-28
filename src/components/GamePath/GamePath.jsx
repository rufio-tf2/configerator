import { remote } from 'electron';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { theme } from '../../styles';
import { Text, TextButton } from '../common';

const GamePathContainerOuter = styled.div`
  align-items: center;
  display: flex;
  grid-area: ${props => props.gridArea};
`;

const GamePathContainerInner = styled.div`
  align-items: flex-end;
  display: flex;
`;

const Label = styled(Text)`
  font-weight: 500;
  margin-right: 0.5em;
`;

// const PathValue = styled(Text)`
//   border: 1px solid ${theme.colors.text};
//   font-style: italic;
// `;

const PathText = styled(Text)`
  color: ${props => (props.warn ? theme.colors.error : theme.colors.text)};
  font-style: italic;
  margin-right: 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 488px;
`;

const openDirectoryDialog = onSelectDirectory => {
  return remote.dialog
    .showOpenDialog({ properties: ['openDirectory'] })
    .then(({ filePaths }) => {
      onSelectDirectory(filePaths);
    });
};

const DEFAULT_GAMEPATH = `C:\\Program Files (x86)\\Steam\\steamapps\\common\\Team Fortress 2`;

const GamePath = ({ className, gamePath, gridArea, setGamePath }) => {
  const [isInputLocked, setInputLocked] = useState(false);

  const handleEdit = useCallback(() => {
    if (!isInputLocked) {
      const onSelectDirectory = fileDirs => {
        try {
          if (fileDirs && fileDirs.length > 0) {
            const gamePath = fileDirs[0];
            setGamePath(gamePath);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setInputLocked(false);
        }
      };

      setInputLocked(true); // [RF] Need to lock before opening
      openDirectoryDialog(onSelectDirectory);
    }
  }, [isInputLocked, setGamePath]);

  return (
    <GamePathContainerOuter className={className} gridArea={gridArea}>
      <GamePathContainerInner>
        <Label>TF2 Path:</Label>
        <PathText>{gamePath || DEFAULT_GAMEPATH}</PathText>
        <TextButton onClick={handleEdit}>Edit</TextButton>
      </GamePathContainerInner>
    </GamePathContainerOuter>
  );
};

export default GamePath;

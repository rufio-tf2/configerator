import useMachine from '@xstate/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Machine } from 'xstate';

const context = {
  keybinding: '',
};

const keybindingFormMachine = Machine({
  /* eslint-disable sort-keys */
  id: 'keybinding-form',
  context,
  initial: 'focused',
  state: {
    focused: {
      on: {},
    },
    changed: {},
    valid: {},
  },
  /* eslint-ensable sort-keys */
});

const Heading = styled.div`
  align-items: center;
  display: flex;
  grid-area: 'header';
  grid-column-end: span 2;
  justify-content: space-between;
  margin: 0 0 0.5em 0;
`;

const Status = styled.span`
  font-size: 13px;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const Label = styled.label`
  grid-area: ${props => props.gridArea};
  margin-right: 0.5em;
`;

const Input = styled.input`
  grid-area: ${props => props.gridArea};
`;

const Controls = styled.div`
  display: flex;
  grid-area: controls;
  justify-content: flex-end;
`;

const SaveButton = styled.button``;
const ResetButton = styled.button``;

const UberBindForm = styled.form`
  display: grid;
  grid-row-gap: 0.25em;
  grid-template-columns: 1fr 6fr;
  grid-template-areas:
    'header     header'
    'text-label text-input'
    'key-label  key-input'
    'controls   controls';
  width: 50%;
`;

const unique = (arr = []) => {
  const set = new Set(arr);
  return Array.from(set);
};

const areSameProperties = (objA, objB, ...properties) => {
  return unique(properties.flat())
    .map(key => objA[key] === objB[key])
    .every(Boolean);
};

const noop = () => {};

const Keybinding = ({ bindKey, onChange = noop, onSave = noop, title }) => {
  const [bindKeyTmp, setBindKeyTmp] = useState(bindKey);
  const [hasUnsavedChanges, setUnsavedChanges] = useState(false);

  const matchesSaved = tmpKey => {
    return areSameProperties(tmpKey, bindKey, ['key', 'text']);
  };

  const status = hasUnsavedChanges
    ? {
        className: 'hasUnsavedChanges',
        text: 'UNSAVED CHANGES',
      }
    : {
        text: 'GOOD SAVE JOB',
      };

  const handleChangeKey = event => {
    const newTmp = event.target.value;
    setUnsavedChanges(!matchesSaved(newTmp));
    setBindKeyTmp(newTmp);
    onChange(newTmp);
  };

  const handleReset = event => {
    event.preventDefault();
    setBindKeyTmp(bindKey);
    setUnsavedChanges(false);
    onChange(bindKey);
  };

  return (
    <UberBindForm onSubmit={onSave}>
      <Heading>
        <Header>{title}</Header>
        <Status {...status}>{status.text}</Status>
      </Heading>
      <Label gridArea="text-label" htmlFor="uberbind-text">
        Text
      </Label>
      <Input
        autoFocus
        gridArea="text-input"
        id="uberbind-text"
        value={bindKeyTmp}
        onChange={handleChangeKey}
      />
      <Controls>
        <ResetButton type="button" onClick={handleReset}>
          Reset
        </ResetButton>
        <SaveButton type="submit">Save</SaveButton>
      </Controls>
    </UberBindForm>
  );
};

export default Keybinding;

import React, { useState } from 'react';
import styled from 'styled-components';

import { getUberBind, setUberBind, useStore } from '../../state';

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

const useUberBind = ({ dispatch, state }) => {
  return {
    setUberBind: payload => dispatch(setUberBind(payload)),
    uberBind: getUberBind(state),
  };
};

const unique = (arr = []) => {
  const set = new Set(arr);
  return Array.from(set);
};

const areSameProperties = (objA, objB, ...properties) => {
  return unique(properties.flat())
    .map(key => objA[key] === objB[key])
    .every(Boolean);
};

const UberBind = () => {
  const store = useStore();
  console.log('store', store);
  const { setUberBind, uberBind = {} } = useUberBind(store);

  const [uberBindTmp, setUberBindTmp] = useState({ ...uberBind });
  const [hasUnsavedChanges, setUnsavedChanges] = useState(false);

  const matchesSaved = tmpData => {
    return areSameProperties(tmpData, uberBind, ['key', 'text']);
  };

  const status = hasUnsavedChanges
    ? {
        className: 'hasUnsavedChanges',
        text: 'UNSAVED CHANGES',
      }
    : {
        text: 'GOOD SAVE JOB',
      };

  const handleChangeText = event => {
    const newTmp = {
      ...uberBindTmp,
      text: event.target.value,
    };
    setUnsavedChanges(!matchesSaved(newTmp));
    setUberBindTmp(newTmp);
  };

  const handleChangeKey = event => {
    const newTmp = {
      ...uberBindTmp,
      key: event.target.value,
    };
    setUnsavedChanges(!matchesSaved(newTmp));
    setUberBindTmp(newTmp);
  };

  const handleSaveUberBind = event => {
    event.preventDefault();

    try {
      setUberBind({
        key: uberBindTmp.key,
        text: uberBindTmp.text,
      });
      setUnsavedChanges(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResetUberBind = event => {
    event.preventDefault();
    setUberBindTmp({ ...uberBind });
    setUnsavedChanges(false);
  };

  return (
    <UberBindForm onSubmit={handleSaveUberBind}>
      <Heading>
        <Header>Uber Bind</Header>
        <Status {...status}>{status.text}</Status>
      </Heading>
      <Label gridArea="text-label" htmlFor="uberbind-text">
        Text
      </Label>
      <Input
        autoFocus
        gridArea="text-input"
        id="uberbind-text"
        value={uberBindTmp.text}
        onChange={handleChangeText}
      />
      <Label gridArea="key-label" htmlFor="uberbind-key">
        Key
      </Label>
      <Input
        gridArea="key-input"
        id="uberbind-key"
        value={uberBindTmp.kext}
        onChange={handleChangeKey}
      />
      <Controls>
        <ResetButton type="button" onClick={handleResetUberBind}>
          Reset
        </ResetButton>
        <SaveButton type="submit">Save</SaveButton>
      </Controls>
    </UberBindForm>
  );
};

export default UberBind;

import clsx from 'clsx';
import React, { useState } from 'react';
import styled from 'styled-components';

import { theme } from '../../styles';
import { TextButton as TextButtonBase } from '../common';
import { getOptionComponent, options } from './optionsRegistry';

const TextButton = styled(TextButtonBase)`
  color: inherit;
  margin: 0;
  text-align: left;
  text-decoration: none;
  padding: 0.5em 0.5em 0.5em 1em;
  width: 100%;

  &:focus {
    outline: thin dotted;
  }
`;

const CFGOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: 'option-list edit-option';
  height: 100%;
`;

const OptionsListContainer = styled.div`
  border-right: 1px solid black;
  grid-area: option-list;
  height: 100%;
  padding: 0.15em 0.5em;
`;

const OptionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const OptionItem = styled.li`
  align-items: center;
  background: ${theme.colors.extralightblue};
  border-radius: 6px;
  color: ${theme.colors.text};
  display: flex;
  margin: 0.15em;

  &.is-selected {
    color: ${theme.colors.rainbowgray};
    border-radius: 6px;
    background: ${theme.colors.lightblue};
  }
`;

const EditContainer = styled.div`
  grid-area: edit-option;
  padding: 0.5em 0 0 0.5em;
`;

const EditOption = ({ id = '', ...rest }) => {
  const Component = getOptionComponent(id);

  return (
    <EditContainer>
      <Component {...rest} />
    </EditContainer>
  );
};

const CFGOptions = ({ className }) => {
  const [selectedOption, setSelectedOption] = useState({});
  const isSelected = option => option.id === selectedOption.id;

  return (
    <CFGOptionsContainer className={className}>
      <OptionsListContainer>
        <OptionList>
          {options.map(option => (
            <OptionItem
              key={option.id}
              className={clsx({ 'is-selected': isSelected(option) })}
            >
              <TextButton onClick={() => setSelectedOption(option)}>
                {option.label}
              </TextButton>
            </OptionItem>
          ))}
        </OptionList>
      </OptionsListContainer>
      <EditOption {...selectedOption} />
    </CFGOptionsContainer>
  );
};

export default CFGOptions;

import React from 'react';
import styled from 'styled-components';

const Inner = styled.div`
  grid-area: ${props => props.gridArea || 'input'};
`;

const Label = styled.label`
  margin-right: 0.5em;
`;

const Input = styled.input``;

const Outer = ({ id, label, ...rest }) => {
  return (
    <Inner>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...rest} />
    </Inner>
  );
};

export default Outer;

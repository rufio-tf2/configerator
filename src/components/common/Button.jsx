import styled from 'styled-components';

import { adjustHex, theme } from '../../styles';

const Button = styled.button`
  border: 1px solid ${theme.colors.text};
  cursor: pointer;
  display: inline-block;
  grid-area: ${props => props.gridArea ?? 'button'};

  &:hover {
    box-shadow: inset 0px 10px 14px -7px ${adjustHex(theme.colors.text, 100)};
  }
`;

export default Button;

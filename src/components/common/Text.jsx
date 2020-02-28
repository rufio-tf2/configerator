import styled from 'styled-components';

const Text = styled.span`
  display: inline-block;
  grid-area: ${props => props.gridArea || 'text'};
`;

export default Text;

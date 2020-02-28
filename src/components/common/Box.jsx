import styled from 'styled-components';

const Box = styled.div`
  grid-area: ${props => props.gridArea || 'box'};
`;

export default Box;

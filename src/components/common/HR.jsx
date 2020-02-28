import styled from 'styled-components';

const HR = styled.hr`
  grid-area: ${props => props.gridArea ?? 'hr'};
`;

export default HR;

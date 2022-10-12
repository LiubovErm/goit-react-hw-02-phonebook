import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  max-width: 400px;
  margin-top: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;;
`;
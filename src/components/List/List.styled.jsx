import styled from 'styled-components';

export const ContactList = styled.ul`
  list-style: none;
`;

export const ContactItem = styled.li`
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Button = styled.button`
  cursor: pointer;  
  width: 180px;
  margin-left: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  border: none;
  padding: ${props => props.theme.space[3]}px;
  
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;
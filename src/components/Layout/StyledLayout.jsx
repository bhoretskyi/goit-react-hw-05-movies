import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;
export const StyledLink = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

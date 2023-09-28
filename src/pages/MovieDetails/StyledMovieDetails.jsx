import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  color: #14385f;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px
`
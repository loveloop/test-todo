import styled, { css } from "styled-components";

const Container = styled.div`
  font-size: 15px;
  ${({ margin }) =>
    margin &&
    css`
      margin-top: ${margin.top || 0}px;
      margin-left: ${margin.left || 0}px;
      margin-right: ${margin.right || 0}px;
      margin-bottom: ${margin.bottom || 0}px;
    `}
`;

export default Container;

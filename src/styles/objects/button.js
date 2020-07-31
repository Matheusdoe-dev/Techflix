import styled from "styled-components";
import Btn from "@material-ui/core/Button";

export const Button = styled(Btn)`
  & {
    background: ${({ background }) =>
      background ? background : `var(--primary)`} !important;
    border-radius: 6px !important;
    color: ${({ color }) => (color ? color : `var(--support-5)`)} !important;
    width: ${({ width }) => (width ? width : `180px`)};
    transition: 0.2s;

    &:hover {
      filter: brightness(80%);
      transition: 0.2s;
    }
  }
`;

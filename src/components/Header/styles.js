import styled from "styled-components";

export const HeaderContainer = styled.header`
  & {
    padding: var(--gap) 0;
    background: ${({ background }) => (background ? background : ``)};

    @media (max-width: 600px) {
      img,
      button {
        margin: 0 auto;
      }
    }
  }
`;

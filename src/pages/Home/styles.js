import styled from "styled-components";

export const HomeSection = styled.section`
  & {
    padding: var(--gap-xl) 0;
    background: ${({ background }) => (background ? background : "")};
    color: var(--support-1);

    h2 {
      margin-bottom: var(--gap-sm);
    }
  }
`;
